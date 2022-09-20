import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import TranslationPage from "../pages/TranslationPage"
import ProfilePage from "../pages/ProfilePage"
import Navbar from "../components/Navbar/Navbar"

const Routing = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="translation" element={<TranslationPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
