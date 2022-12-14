import { useState } from "react"
import { useForm } from "react-hook-form"
import { useUser } from "../../context/UserContext"
import { storageSave } from "../../utils/storage"
import { updateTranslations } from "../../api/user"

const textConfig = {
  required: true,
  minLength: 1,
  maxLength: 40,
  pattern: /^[A-Za-z]+$/,
}

const TranslationForm = () => {
  const { register, handleSubmit } = useForm()
  const [text, setText] = useState([])
  const { user } = useUser()

  const onSubmit = (data) => {
    //Sets text to be an array of letters from input
    setText(convertToLetterArray(data.text))

    //Pushes new translation into translations array and then saves the user bo
    user.translations.push(data.text)

    updateTranslations(user.translations, user)
    storageSave("user", user)
  }

  const convertToLetterArray = (text) => {
    const letters = Array.from(text.toLowerCase())
    return letters
  }

  const translated = (() => {
    return text.map((letter, index) => {
      return (
        <img
          key={index}
          alt='letter'
          src={require(`../assets/${letter}.png`)}
        ></img>
      )
    })
  })()

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor='text'>Text to translate: </label>
          <input
            type='text'
            placeholder='Write anything!'
            {...register("text", textConfig)}
          />
        </fieldset>
        <button type='submit'>Go</button>
      </form>
      <div>
        {}
        <div>{translated}</div>
      </div>
    </div>
  )
}

export default TranslationForm
