import { useEffect } from "react"
import { useState } from "react"
import { fetchAllUsers, postUser } from "../services/UserService"

const LoginPage = () => {
  const [userName, setUserName] = useState("")
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchAllUsers()
      .then((users) => {
        setUsers(users)
      })
      .catch((error) => {
        console.error(error.message)
      })
  }, [])

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
      <div>
        {users.map((user) => (
          <p>{user.username}</p>
        ))}
      </div>
      <p>Heihei</p>
    </>
  )
}

export default LoginPage
