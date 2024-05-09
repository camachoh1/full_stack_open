function Note({note, toggleImportance}) { // using object destructuring to access the toggleImportance property of the props object.

  const label = note.important ? 'make not important' : 'make important' // label for the button. message changes depending on the note's importance

  return (
    <li className='note'>
      {note.content} 
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note