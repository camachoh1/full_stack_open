function Contacts({contacts, deleteContact}) {
  return (
    <ul>
    {contacts.map(person => {
      return <li key={person.name}>
        {person.name} - {person.number}
        <button onClick={deleteContact}>Delete</button>
      </li>
    })}
  </ul>
  )
}

export default Contacts;