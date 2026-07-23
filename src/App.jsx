import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Navbar } from "./components/Navbar/Navbar"
import { Footer } from "./components/Footer/Footer"
import { Home } from "./pages/Home/Home"
import { About } from "./pages/About/About"
import { Events } from "./pages/Events/Events"
import { EventDetail } from "./pages/Events/EventDetail"
import { Newsletter } from "./pages/Newsletter/Newsletter"
import { Projects } from "./pages/Projects/Projects"
import { Team } from "./pages/Team/Team"
import { JoinUs } from "./pages/JoinUs/JoinUs"
import { FAQ } from "./pages/FAQ/FAQ"
import { Contact } from "./pages/Contact/Contact"
import { Feedback } from "./pages/Feedback/Feedback"

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
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
