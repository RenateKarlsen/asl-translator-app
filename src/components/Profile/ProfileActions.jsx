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

  const handleClearHistoryClick = async () => {
    if (!window.confirm("Are you sure? \nThis cannot be undone!")) {
      return
    }

    const [clearError] = await removeTranslations(user.id)

    if (clearError !== null) {
      // Something went wrong...
      return
    }

    const updatedUser = {
      ...user,
      translations: [],
    }

    storageSave("user", updatedUser)
    setUser(updatedUser)
  }

  return (
    <>
      <ul>
        <li>
          <Link to='/translation'></Link>
        </li>
        <li>
          <button onClick={handleClearHistoryClick}>Clear history</button>
        </li>
        <li>
          <button onClick={handleLogoutClick}>Logout</button>
        </li>
      </ul>
    </>
  )
}

export default ProfileActions
