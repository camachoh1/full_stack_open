import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'


function App() {
  console.log('Tu mae');

  const now = new Date();
  const friends = [
    {name: "Coleto", age: 31},
    {name: "Burro", age: 33},
  ]
  const a = 10;
  const b = 20;
  console.log(now, a+b);
  const name = "Coleto";
  const age = 33;
  
  return (
    <>
      <Hello name={friends[0].name} age={friends[0].age}/>
      <Hello name="el burro" age={age}/>
      <p>it is {now.toString()}</p>
      <p>{a} plus {b} is {a + b}</p>
    </>
  );
}

function Hello(props) {
  console.log(props);
  return(
  <div>
    <p>Hablalo este es el segundo contenedor</p>
    <p>{props.name} you are {props.age} years old.</p>
  </div>
  ) 
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
