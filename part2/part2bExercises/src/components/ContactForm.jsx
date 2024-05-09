function ContactForm(props) {
  console.log(props)
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          Name: <input 
            value={props.newName}
            onChange={props.handleName}
          />
        </div>
        <div>
          Number: <input
            value={props.newNumber}
            onChange={props.handleNumber}
          />
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
    </form>
  )
}

export default ContactForm

