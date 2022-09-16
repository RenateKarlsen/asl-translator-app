import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "../components/LoginPage"
import TranslationPage from "../components/TranslationPage"
import ProfilePage from "../components/ProfilePage"

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="translation" element={<TranslationPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
