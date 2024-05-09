import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'


// function App(props) {
//   const [notes, setNotes] = useState(props.notes); // keeps track of all notes 
//   console.log(props)
//   const [newNote, setNewNote] = useState('a new note...'); // keeps track of the new notes
//   const [showAll, setShowAll] = useState(true); // keeps track of which note should be displayed

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

//   const notesToShow = showAll
//     ? notes
//     : notes.filter(note => note.important)

//   return (
//     <div>
//       <h1>Notes</h1>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important' : 'all'}
//         </button>
//       </div>
//       <ul>
//         {notesToShow.map(note => 
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//       <form onSubmit={addNote}>
//         <input 
//           value={newNote}
//           onChange={handleNoteChange}/>
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   )
// }


// performing fetch request to the json server using axiom and effect hooks from the App component


function App() {
  const [notes, setNotes] = useState([]); // keeps track of all notes 

  const [newNote, setNewNote] = useState('a new note...'); // keeps track of the new notes
  const [showAll, setShowAll] = useState(true); // keeps track of which note should be displayed

  // const [notes, setNotes] = useState([]) // initializing the state with an empty collection

  useEffect(() => { // receives an callback function and dependencies.
    console.log('effect');
    axios
        .get('http://localhost:3001/notes') // get request with axios, returns a promise
        .then(response => { // successful promise handled with `then`
          console.log('promise fulfilled');
          setNotes(response.data); // updates the state variable.
        })
  }, [])
  console.log('render', notes.length, 'notes')

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
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}/>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}


export default App
