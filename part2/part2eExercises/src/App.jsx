import { useState, useEffect } from 'react'
import contactService from './services/contacts'
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import Contacts from './components/Contacts';
import Notification from './components/Notification';
import './index.css'

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    contactService
        .getAllContacts()
        .then(response => {
          setPersons(response);
        })
  }, [])

  const handleNewName = (event) => {
    const userInput = event.target.value;
    setNewName(userInput);
  }

  const handleNewNumber = (event) => {
    const userInput = event.target.value;
    setNewNumber(userInput)
  }

  const contactAlreadyExist = (contact) => {
    const existingIdx = persons.find(person => person.name.toLowerCase() === contact.toLowerCase());
    return existingIdx ? true : false;
  }

  const addContactName = (event) => {
    event.preventDefault();
    if (!contactAlreadyExist(newName)) {
      const newContact = {name: newName, number: newNumber}

      contactService
                  .createContact(newContact)
                  .then(response => {
                    setPersons(persons.concat(response));
                    setNotification(`${newName} Added!`);
                    setTimeout(() => {
                      setNotification(null);
                    }, 3000)
                    setNewName('');
                    setNewNumber('');
                  });
    } else {
      const message = `"${newName}" is already added to phonebook, do you want to update the contact?`;
      
      if (window.confirm(message)) {
        const contact = persons.find(person => person.name === newName)
        const updatedContact = {...contact, name: newName, number: newNumber}

        contactService
                    .updateContact(updatedContact)
                    .then(response => {
                      const updatedPersons = persons.filter(person => {
                        return person.name !== response.name;
                      })
                      setPersons(updatedPersons.concat(response));
                      setNewName('');
                      setNewNumber('');
                    })
                    .catch(error => {
                      setNotification(`Error: ${newName} does not exist!`);
                      setTimeout(() => {
                        setNotification(null);
                      }, 3000)
                      setNewName('');
                      setNewNumber('');
                    })
      }
    }
  }

  const handleRemoveContact = (event) => {
    event.preventDefault()
    const contact = event.target.parentNode.firstChild.data
    
    if (window.confirm(`Delete ${contact}?`)) {
      const contactToDelete = persons.find(person => person.name === contact);
      contactService
                .deleteContact(contactToDelete.id)
                .then(_response => {
                  const updated = persons.filter(person =>{
                    return person.name !== contact;
                  })
                  setPersons(updated);
                });
    }
  }

  const handleFilterChange = (event) => {
    const userInput = event.target.value;
    setFilter(userInput);
  }

  const filteredContacts = filter 
  ? persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
  : persons

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notification} />
      <Filter value={filter} handleFilter={handleFilterChange}/>
      <h2>Add a New Contact</h2>
      <ContactForm 
      handleSubmit={addContactName}
      newName={newName} 
      newNumber={newNumber}
      handleName={handleNewName}
      handleNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <Contacts 
      contacts={filteredContacts} 
      deleteContact={handleRemoveContact}/>
    </div>
  )
}

export default App
