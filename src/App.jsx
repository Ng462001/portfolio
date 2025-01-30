import { Route, Routes } from "react-router-dom"
import Resume from "./components/Resume"
import About from "./components/About"
import Home from "./components/Home"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
