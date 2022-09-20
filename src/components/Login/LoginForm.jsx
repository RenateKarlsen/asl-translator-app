import { useForm } from "react-hook-form"
import { loginUser } from "../../api/user"

const usernameConfig = {
  required: true,
  minLength: 2,
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async ({ username }) => {
    const [error, user] = await loginUser(username)
    console.log("Error: ", error)
    console.log("User: ", user)
  }

  console.log(errors)

  const errorMessage = (() => {
    if (!errors.username) {
      return null
    }
    if (errors.username.type === "required") {
      return <span>Username is regquired</span>
    }
    if (errors.username.type === "minLength") {
      return <span>Username is too short(min.3)</span>
    }
  })()

  return (
    <>
      <h2>What is your name????</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            placeholder="Navn Navnesen"
            {...register("username", usernameConfig)}
          />

          {errorMessage}
        </fieldset>
        <button type="submit">Continue</button>
      </form>
    </>
  )
}
export default LoginForm
