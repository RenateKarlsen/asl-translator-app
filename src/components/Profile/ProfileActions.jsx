import { Link } from "react-router-dom"
//import { STORAGE_KEY_USER } from "../const/storageKeys"
//import { storageSave } from "../../utils/storage"
import { useUser } from "../../context/UserContext"
import { storageDelete } from "../../utils/storage"


const ProfileActions = () => {

    const { setUser } = useUser()

    const handleLogoutClick = () => {
        if(window.confirm("Are you sure?")) {
           // storageDelete(STORAGE_KEY_USER)
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