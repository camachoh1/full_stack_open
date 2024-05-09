const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));


morgan.token('post-body', (request, response) => {
  if (request.method === "POST") {
    console.log(request.body)
    return JSON.stringify(request.body);
  }

  return '-'
})

// const requestLogger = (request, response, next) => { // middleware definition 
//   console.log('Method:', request.method)
//   console.log('Path:  ', request.path)
//   console.log('Body:  ', request.body)
//   console.log('---')
//   next()
// }

// app.use(requestLogger); // middleware invocation

let contacts = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})


app.get('/api/contacts', (request, response) => {
  response.json(contacts)
});

app.get('/api/contacts/:id', (request, response) => {
  const id = Number(request.params.id);
  const contact = contacts.find(contact => contact.id === id);
  
  if (contact) {
    response.json(contact);
  } else {
    response.status(404).end();
  }
});

app.get('/info', (request, response) => {
  const message = `Phonebook has info for ${contacts.length} people`;
  const date = new Date();
  const day = date.toDateString();
  const time = date.toTimeString();

  const markup = `<p>${message}</p><br /><p>${day} ${time}</p>`;

  response.send(markup);
});


const invalidRequest = (body) => {
  const name = body.name;
  const existingContact = contacts.find(contact => contact.name === name)

  return !body.name || !body.number || existingContact;
}

const errorMessage = (body) => {
  if (!body.name || !body.number) {
    return "content missing"
  } else {
    return "name must be unique"
  }
} 

app.post('/api/contacts', (request, response) => {
  const body = request.body;
  
  if (invalidRequest(body)) {
    return response.status(400).json({
      error: errorMessage(body)
    });
  }

  const newContact = {
    name: body.name,
    number: body.number,
    id: Math.floor(Math.random() * 100)
  }
  
  contacts = contacts.concat(newContact);
  return response.json(newContact)
});

app.delete('/api/contacts/:id', (request, response) => {
  const id = Number(request.params.id);
  contacts = contacts.filter(contact => contact.id !== id);

  response.status(204).end();
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({error: "Unknown Endpoint"});
};

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('listening compae! Port:', PORT)
});
