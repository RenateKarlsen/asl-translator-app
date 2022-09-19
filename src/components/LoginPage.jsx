import { useState } from "react"
import { postUser } from "../services/UserService"

const LoginPage = () => {
  const [userName, setUserName] = useState("")

  const handleNameChange = (event) => {
    setUserName(event.target.value)
  }

  const handleRegisterSubmit = (event) => {
    event.preventDefault()
    postUser(userName)
  }

  return (
    <>
      <form onSubmit={handleRegisterSubmit}>
        <fieldset>
          <input type="text" value={userName} onChange={handleNameChange} />
          <button type="submit">Create new user</button>
        </fieldset>
      </form>
      <p>Heihei</p>
    </>
  )
}

export default LoginPage
