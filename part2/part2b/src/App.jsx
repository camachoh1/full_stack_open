import { useState } from 'react'
import Note from '../../part2a/src/components/Note'

// function App(props) {
//   const [notes, setNotes] = useState(props.notes);
//   const [newNote, setNewNote] = useState('a new note...') 

//   // const [notes, setNotes] = useState([]) // initializing the state with an empty collection

//   const addNote = (event) => { // defining event handler for the html form element
//     event.preventDefault(); // preventing default DOM behaviour
//     const noteObject = {
//       content: newNote,
//       important: Math.random() < 0.5,
//       id: notes.length + 1,
//     }

//     setNotes(notes.concat(noteObject));
//     setNewNote('');
//   }

//   const handleNoteChange = (event) => {
//     const userInput = event.target.value
//     console.log(userInput);
//     setNewNote(userInput);
//   }


//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => <Note key={note.id} note={note}/>)}
//       </ul>
//       <form onSubmit={addNote}>
//         <input 
//           value={newNote} // forces the input value to match the state variable
//           onChange={handleNoteChange}/> /* updates the state variable on any edits */
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   )
// }


// filtering displayed elements
function App(props) {
  const [notes, setNotes] = useState(props.notes); // keeps track of all notes 
  const [newNote, setNewNote] = useState('a new note...'); // keeps track of the new notes
  const [showAll, setShowAll] = useState(true); // keeps track of which note should be displayed

  // const [notes, setNotes] = useState([]) // initializing the state with an empty collection

  const addNote = (event) => { // defining event handler for the html form element
    event.preventDefault(); // preventing default DOM behaviour
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject));
    setNewNote('');
  }

  const handleNoteChange = (event) => {
    const userInput = event.target.value
    console.log(userInput);
    setNewNote(userInput);
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}

        {/* {notes.map(note => <Note key={note.id} note={note}/>)} */}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote} // forces the input value to match the state variable
          onChange={handleNoteChange}/>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}


export default App
