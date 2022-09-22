import { TranslationArea } from "../components/Translation/TranslationArea"
import withAuth from "../hoc/withAuth"

const TranslationPage = () => {
  return (
    <>
      <h1>Translation</h1>
      <TranslationArea />
    </>
  )
}

export default withAuth(TranslationPage)
