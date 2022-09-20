import withAuth from "../hoc/withAuth"

const ProfilePage = () => {
  return <h1> Hei fra profilen din</h1>
}

export default withAuth(ProfilePage)
