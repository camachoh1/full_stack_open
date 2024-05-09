import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// Page Re-Rendering

// let counter = 1;

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <React.StrictMode>
// //     <App counter={counter} /> 
// //   </React.StrictMode>,
// // )

// the above renders the counter to the page. 

// in order to increment the counter and render the updated value, we need to call the refresh method.

// function refresh() {
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//       <App counter={counter} /> 
//     </React.StrictMode>,
//   )
// }

// refresh();
// counter += 1;
// refresh();
// counter += 1;
// refresh();

// Using state hooks to create state

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
)