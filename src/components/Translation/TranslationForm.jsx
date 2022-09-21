import { useState } from "react"
import { useForm } from "react-hook-form"

const textConfig = {
  required: true,
  minLength: 0,
}

const TranslationForm = () => {
  const { register, handleSubmit } = useForm()
  const [textText, setTextText] = useState()

  const onSubmit = (data) => {
    setTextText(data.text)
    console.log(data.text)
  }

  const image = (() => {
    if (!textText) {
      return <p>null</p>
    }
    if (textText !== null) {
      return <img alt='letter' src={require(`../assets/${textText}.png`)}></img>
    }
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
        <div>{image}</div>
      </div>
    </div>
  )
}

export default TranslationForm
