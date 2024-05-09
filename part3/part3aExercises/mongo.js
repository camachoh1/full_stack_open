const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('please enter your password');
  process.exit(1);
}

const password = process.argv[2];
let newContactInfo;

if (process.argv[3] && process.argv[4]) {
  newContactInfo = {name: process.argv[3], number: process.argv[4]}
}

const URL = `mongodb+srv://haroldcamacho:${password}@cluster0.iglnmay.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.set('strictQuery', false);
mongoose.connect(URL);

const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Contact = mongoose.model('Contact', contactSchema);


const fetchContacts = async function(model) {
  try {
    await model.find({}).then(result => {
      console.log('phonebook:');
      result.forEach(contact => {
        console.log(contact.name, contact.number);
      });
      mongoose.connection.close();
    });
  } catch(error) {
    console.error('Error fetching:', error);
  }
}

const saveContact = async function(document) {
  try {
    await document.save().then(result => {
      console.log(`contact ${document.name} saved!`);
      mongoose.connection.close();
    });
  } catch(error) {
    console.error('Error adding Contact:', error);
  }
}

  if (password && !newContactInfo) {
    fetchContacts(Contact);
  } else if (password && newContactInfo) {
    const newContact = new Contact({
      name: newContactInfo.name,
      number: newContactInfo.number,
    });
    saveContact(newContact);
  }


