import { useState } from 'react' // importing the useState function 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Helper Functions and Object Destructuring

// function Hello({name, age}) {
//   const bornYear = function() {
//     const yearNow = new Date().getFullYear();
//     return yearNow - age;
//   }
//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// } 

// function App() {
//   const name = "Coleto";
//   const age = 90;
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// Page Re-Rendering

// function App() {
//   const [counter, setCounter] = useState(0) 
//   // Function call adds state to the components and renders it initialized with the value of zero. 
//   // Function returns an array that contains two items
//   // assignment using array destructuring.  

//   setTimeout(() => {
//     setCounter(counter + 1) 
//   }, 1000);


//   return (
//     <div>{counter}</div>
//   ) 
// }


// Event Handlers

// function App() {
//   const [counter, setCounter] = useState(0);

//   const handleClick = function() {
//     setCounter(counter + 1);
//     console.log('clicked!');
//   }

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={handleClick}>Increment</button>
//       <button onClick={() => setCounter(0)}>Restart</button>
//     </div>
//   )
// }


// passing state to child components
// this allows us to make our application more modular and maintainable.
// refactoring the app above:

function Display(props) {
  return (
    <div>{props.counter}</div>
  )
}

function Button(props) {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}


function App() {
  const [counter, setCounter] = useState(0);

  const increaseByOne = function() {
    setCounter(counter + 1);
    console.log('clicked!');
  }
  const decreaseByOne = function() {
    setCounter(counter - 1);
    console.log('clicked!');
  }

  const setToZero = function() {
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text="Add"/>
      <Button onClick={decreaseByOne} text="Subtract" />
      <Button onClick={setToZero} text="Restart" />
    </div>
  )
}
export default App
