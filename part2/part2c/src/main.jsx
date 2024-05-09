import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import axios from 'axios';

// rendering the notes from the JSON server using fetch

// async function fetchNotes() {
//   try {
//     let response = await fetch('http://localhost:3001/notes')
//     return await response.json();
//   } catch(error) {
//     console.error("Error: ", error);
//     return [];
//   }
// }

// async function renderApp() {
//   const notes = await fetchNotes()
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//       <App notes={notes} />
//     </React.StrictMode>,
//   )
// }

// renderApp()


// fetching data from json server using axios
//   axios
//       .get('http://localhost:3001/notes')
//       .then(res => {
//         const notes = res.data;
//         ReactDOM.createRoot(document.getElementById('root')).render(
//           <React.StrictMode>
//             <App notes={notes} />
//           </React.StrictMode>,
//         )
//       })
// // the method above is useful but not ideal



// using react effect-hooks

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)