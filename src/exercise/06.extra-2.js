// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState()

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(event.target.elements.usernameInput.value)
  }

  const handleChange = event => {
    const {value} = event.target
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input onChange={handleChange} id="usernameInput" type="text" />
        <div role="alert" style={{color: 'red'}}>
          {error}
        </div>
      </div>
      <button disabled={error} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
