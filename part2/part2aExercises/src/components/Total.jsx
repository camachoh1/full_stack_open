// function Total(prop) {
//   return (
//     <p>Number of exercises {prop.parts[0].exercises + prop.parts[1].exercises + prop.parts[2].exercises}</p>
//   )
// }

function Total(prop) {
  return (
    <h3>Total of exercises {prop.parts.reduce((acc, val) => {
      acc += val.exercises;
      return acc;
    }, 0)}</h3>
  )
}

export default Total