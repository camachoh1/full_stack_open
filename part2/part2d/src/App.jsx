import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/notes'

// function App() {
//   const [notes, setNotes] = useState([]); // keeps track of all notes 

//   const [newNote, setNewNote] = useState('a new note...'); // keeps track of the new notes
//   const [showAll, setShowAll] = useState(true); // keeps track of which note should be displayed

//   // const [notes, setNotes] = useState([]) // initializing the state with an empty collection

//   useEffect(() => { // receives an callback function and dependencies.
//     axios
//         .get('http://localhost:3001/notes') // get request with axios, returns a promise
//         .then(response => { // successful promise handled with `then`
//           setNotes(response.data); // updates the state variable.
//         })
//   }, []);

//   const addNote = (event) => { // defining event handler for the html form element
//     event.preventDefault(); // preventing default DOM behaviour
//     const noteObject = {
//       content: newNote,
//       important: Math.random() < 0.5,
//       id: notes.length + 1,
//     }

//     axios
//         .post('http://localhost:3001/notes', noteObject)
//         .then(response => {
//           setNotes(notes.concat(response.data));
//           setNewNote('');
//         })
//   }

//   const handleNoteChange = (event) => {
//     const userInput = event.target.value
//     console.log(userInput);
//     setNewNote(userInput);
//   }

//   const notesToShow = showAll
//     ? notes
//     : notes.filter(note => note.important);

  
//     const toggleImportanceOf = (id) => {
//       const url = `http://localhost:3001/notes/${id}`; // url
//       const note = notes.find(note => note.id === id); // find note
//       const changedNote = {...note, important: !note.important}; // updating the existing note importance without mutating the original note 
  
//       axios
//           .put(url, changedNote) // put request (update)
//           .then(response => { // handling promise response
//             setNotes(notes.map(note => { // updating state variable. This will return an array containing all the notes with the respective updated notes importance.

//               return note.id !== id ? note : response.data; // if the current note !== id the current note is added to the return value as is. Else we use the updated note data returned from the server after performing the PUT request.
//             }))
//           })
//     }

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
//           <Note 
//             key={note.id}
//             note={note}
//             toggleImportance={() => toggleImportanceOf(note.id)}
//           />
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


function App() {
  const [notes, setNotes] = useState([]); // keeps track of all notes 

  const [newNote, setNewNote] = useState('a new note...'); // keeps track of the new notes
  const [showAll, setShowAll] = useState(true); // keeps track of which note should be displayed

  // const [notes, setNotes] = useState([]) // initializing the state with an empty collection

  useEffect(() => { // receives an callback function and dependencies.
    noteService
        .getAll() // get request with axios, returns a promise
        .then(response => { // successful promise handled with `then`
          setNotes(response); // updates the state variable.
        })
  }, []);

  const addNote = (event) => { // defining event handler for the html form element
    event.preventDefault(); // preventing default DOM behaviour
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }

    noteService
        .create(noteObject)
        .then(response => {
          setNotes(notes.concat(response));
          setNewNote('');
        })
  }

  const handleNoteChange = (event) => {
    const userInput = event.target.value
    console.log(userInput);
    setNewNote(userInput);
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important);

  
    const toggleImportanceOf = (id) => {
      const note = notes.find(note => note.id === id); // find note
      const changedNote = {...note, important: !note.important}; // updating the existing note importance without mutating the original note 
  
      noteService
          .update(id, changedNote) // put request (update)
          .then(response => { // handling promise response
            setNotes(notes.map(note => { // updating state variable. This will return an array containing all the notes with the respective updated notes importance.

              return note.id !== id ? note : response; // if the current note !== id the current note is added to the return value as is. Else we use the updated note data returned from the server after performing the PUT request.
            }))
          })
          .catch(error => {
            alert('Error')
            setNotes(notes.filter(n => n.id !== id));
          })
    }

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
          <Note 
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
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
