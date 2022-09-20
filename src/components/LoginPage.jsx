import { useEffect } from "react"
import { useState } from "react"
import { fetchAllUsers, postUser } from "../services/UserService"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  const [userName, setUserName] = useState("")
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchAllUsers()
      .then((users) => {
        setUsers(users)
      })
      .catch((error) => {
        console.error(error.message)
      })
  }, [])

  const userExists = () => {
    let boogie = false
    users.forEach((user) => {
      console.log(user.username)
      if (user.username === userName) {
        boogie = true
        return boogie
      }
    })
    return boogie
  }

  const handleNameChange = (event) => {
    setUserName(event.target.value)
  }

  const handleRegisterSubmit = (event) => {
    event.preventDefault()

    if (userExists()) {
      navigate("/profile")
    } else {
      postUser(userName)
    }
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
