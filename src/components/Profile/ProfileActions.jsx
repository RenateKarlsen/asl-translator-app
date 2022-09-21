import { Link } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import { storageDelete } from "../../utils/storage"


const ProfileActions = () => {

    const { setUser } = useUser()

    const handleLogoutClick = () => {
        if(window.confirm("Are you sure?")) {
            storageDelete("user")
            setUser(null)
        }

    }
    return (
        <><p>Action</p><ul>
            <li>
                <Link to="/translation"></Link>
            </li>
            <li><button>Clear history</button></li>
            <li><button onClick={ handleLogoutClick }>Logout</button></li>
        </ul></>
    )
}

export default ProfileActions