import { Link } from "react-router-dom"
import { removeTranslations } from "../../api/user"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave } from "../../utils/storage"

const ProfileActions = () => {
  const { user, setUser } = useUser()

  const handleLogoutClick = () => {
    if (window.confirm("Are you sure?")) {
      storageDelete("user")
      setUser(null)
    }
  }

  const handleClearClick = () => {
    if (window.confirm("Are you sure?")) {
      removeTranslations(user)
      storageDelete("user")
      storageSave("user", {
        username: user.username,
        id: user.id,
        translations: [],
      })
      window.location.reload()
    }
  }

  return (
    <>
      <ul>
        <li>
          <Link to='/translation'></Link>
        </li>
        <li>
          <button onClick={handleClearClick}>Clear history</button>
        </li>
        <li>
          <button onClick={handleLogoutClick}>Logout</button>
        </li>
      </ul>
    </>
  )
}

export default ProfileActions
