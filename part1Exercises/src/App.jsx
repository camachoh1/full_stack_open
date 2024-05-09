import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const course = {
    name: "Half Stack App dev",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
    
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ]
  }
  
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

function Header(prop) {
  return (
    <h1>{prop.course}</h1>
  )
}

function Content(prop) {
  return (
    <>
      <p>{prop.parts[0].name} {prop.parts[0].exercises}</p>
      <p>{prop.parts[1].name} {prop.parts[1].exercises}</p>
      <p>{prop.parts[2].name} {prop.parts[2].exercises}</p>
    </>
  )
}

function Total(prop) {
  return (
    <p>Number of exercises {prop.parts[0].exercises + prop.parts[1].exercises + prop.parts[2].exercises}</p>
  )
}

export default App
