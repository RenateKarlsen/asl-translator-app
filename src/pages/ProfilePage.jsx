import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import withAuth from "../hoc/withAuth"
import { useUser } from "../context/UserContext"

const ProfilePage = () => {

  const { user } = useUser()

  return (
  <>
    <h1> Hei fra profilen din</h1>
    <ProfileHeader username={ user.username } />
    <ProfileActions />
    <ProfileTranslationHistory translations= { user.translations }/>
  </> )
}

export default withAuth(ProfilePage)
