function Notification({message}) {
  if (message === null) {
    return null;
  }

  let notificationStyle = message.includes('Error') ? 'error': 'success';

  return (
    <div className={notificationStyle}>
      {message}
    </div>
  )
}

export default Notification