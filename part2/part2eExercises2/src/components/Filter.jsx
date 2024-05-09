function Filter(props) {
  return (
    <div>
      Find Countries: <input value={props.value} onChange={props.handleFilter}/>
    </div>
  )
}

export default Filter