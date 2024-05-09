import { useState } from 'react'
import Note from './components/Note'


// accessing elements from a collection manually.
// function App(props) {
//   const {notes} = props;

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         <li>{notes[0].content}</li>
//         <li>{notes[1].content}</li>
//         <li>{notes[2].content}</li>
//       </ul>
//     </div>
//   )
// }

// accessing elements from a collection using map
// note that the invocation of map is JavaScript code therefore needs to be wrapped in curly braces in a JSX template. 

// function App(props) {
//   const {notes} = props;
  

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => <li key={note.id}>{note.content}</li>)}
//       </ul>
//     </div>
//   )
// }


// refactored version

// function Note({note}) { // extracting the note into its own component which is rendered as child of App.
//   return (
//     <li>{note.content}</li>
//   )
// }

function App({notes}) { // using destructuring to access the notes array instantly. 
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <Note key={note.id} note={note}/>)}
      </ul>
    </div>
  )
}

export default App

