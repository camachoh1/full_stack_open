function Content({parts}) {
  console.log(parts, 'prop')
  return (
    <>
      <ul>
        {parts.map(part => <li key={part.id}>{part.name}: {part.exercises}</li>)}
      </ul>
    </>
  )
}

export default Content