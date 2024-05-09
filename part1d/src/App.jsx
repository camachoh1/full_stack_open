import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// if we need to keep track of multiple states, we can create multiple states with `useState` each state created, keeps track of a different state variable. In the case below the state variables left and right.

// function App() {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)

//   const incrementLeft = function() {
//     setLeft(left + 1);
//   }

//   const incrementRight = function() {
//     setRight(right + 1);
//   }
//   return (
//     <div>
//       {left}
//       <button onClick={incrementLeft}>Left</button>
//       <button onClick={incrementRight}>Right</button>
//       {right}
//     </div>
//   )
// }


// useState not only receives an integer as an argument, it can also receive more complex data structures to represent states. For example objects. This will allow us to use a single state to keep track of multiple variables. 

// function App() {
//   const [clicks, setClicks] = useState({left: 0, right: 0});


//   const handleLeftClick = function() {
//     const newClicks = { // using object spreading
//       ...clicks,
//       left: clicks.left + 1,
//     }

//     setClicks(newClicks)
//   }

//   const handleRightClick = function() {
//     const newClicks = {
//       ...clicks,
//       right: clicks.right + 1,
//     }

//     setClicks(newClicks)
//   }


//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>Left</button>
//       <button onClick={handleRightClick}>Right</button>
//       {clicks.right}
//     </div>
//   )
// }

// handling arrays

// function App() {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, seetAll] = useState([]);
//   console.log(allClicks);
//   function handleLeftClick() {
//     seetAll(allClicks.concat("L"));
//     setLeft(left + 1);
//   }
//   function handleRightClick() {
//     seetAll(allClicks.concat("R"));
//     setRight(right + 1);
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>Left</button>
//       <button onClick={handleRightClick}>Right</button>
//       {right}
//       <p>{allClicks.join(' ')}</p>
//     </div>
//   )
// }


// state update is asynchronous by nature

// function App() {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAll] = useState([]);
//   const [total, setTotal] = useState(0);

//   const handleLeftClick = () => {
//     const updatedLeft = left + 1
//     setAll(allClicks.concat("L"));

//     setLeft(updatedLeft)
//     setTotal(updatedLeft + right)
//   }
//   const handleRightClick = () => {
//     const updatedRight = right + 1
//     setAll(allClicks.concat("R"));
//     setRight(updatedRight)
//     setTotal(left + updatedRight)
//   }

//   return <div>
//     {left}
//     <button onClick={handleLeftClick}>Left</button>
//     <button onClick={handleRightClick}>Right</button>
//     {right}
//     <p>{allClicks.join(' ')}</p>
//     <p>total: {total}</p>
//   </div>
// }


// conditional rendering


function History(props) {
  if (props.allClicks.length === 0) {
    return (
      <div>
        Press the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    const updatedLeft = left + 1
    setAll(allClicks.concat("L"));

    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }
  const handleRightClick = () => {
    const updatedRight = right + 1
    setAll(allClicks.concat("R"));
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  return <div>
    {left}
    <button onClick={handleLeftClick}>Left</button>
    <button onClick={handleRightClick}>Right</button>
    {right}
    <History allClicks={allClicks}/>
    <p>total clicks: {total}</p>
  </div>
}

export default App
