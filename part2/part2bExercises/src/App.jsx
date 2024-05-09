import { useState } from 'react'
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import Contacts from './components/Contacts';

function App() {
  const [persons, setPersons] = useState([
    {name: "Elver Gonzales", number: "333-222-1111"},
    {name: "Tu Mae", number: "333-222-1111"},
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const addContactName = (event) => {
    event.preventDefault();
    if (!contactAlreadyExist(newName)) {
      const newContact = {name: newName, number: newNumber}
      setPersons(persons.concat(newContact));
      setNewName('');
      setNewNumber('');
    } else {
      alert(`"${newName}" is already added to phonebook.`)
    }
  }

  const handleNewName = (event) => {
    const userInput = event.target.value;
    setNewName(userInput);
  }

  const handleNewNumber = (event) => {
    const userInput = event.target.value;
    setNewNumber(userInput)
  }

  const handleFilterChange = (event) => {
    const userInput = event.target.value;
    setFilter(userInput);
  }

  const contactAlreadyExist = (contact) => {
    const existingIdx = persons.find(person => person.name.toLowerCase() === contact.toLowerCase());
    return existingIdx ? true : false;
  }

  const filteredContacts = filter 
  ? persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
  : persons

  return (
    <div>
      <h1>Phonebook</h1>
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
      <Contacts contacts={filteredContacts}/>
    </div>
  )
}

export default App
