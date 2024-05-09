function Filter(props) {
  return (
    <div>
      Find contact: <input value={props.value} onChange={props.handleFilter}/>
    </div>
  )
}

export default Filter