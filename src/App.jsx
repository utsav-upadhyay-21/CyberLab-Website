import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Navbar } from "./components/Navbar/Navbar"
import { Footer } from "./components/Footer/Footer"
import { UpdateBanner } from "./components/UpdateBanner/UpdateBanner"
import { Home } from "./pages/Home/Home"
import { About } from "./pages/About/About"
import { Newsletter } from "./pages/Newsletter/Newsletter"
import { Projects } from "./pages/Projects/Projects"
import { Team } from "./pages/Team/Team"
import { JoinUs } from "./pages/JoinUs/JoinUs"
import { FAQ } from "./pages/FAQ/FAQ"
import { Contact } from "./pages/Contact/Contact"
import { Feedback } from "./pages/Feedback/Feedback"
import { Events } from "./pages/Events/Events"
import { CTF } from "./pages/CTF/CTF"
import { CurrentAffairs } from "./pages/CurrentAffairs/CurrentAffairs"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="texture-noise min-h-screen">
      <ScrollToTop />
      <Navbar />
      <UpdateBanner />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/events" element={<Events />} />
          <Route path="/ctf" element={<CTF />} />
          <Route path="/current-affairs" element={<CurrentAffairs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
