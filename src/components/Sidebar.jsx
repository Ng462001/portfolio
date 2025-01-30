import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const headerToggle = () => {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggle.classList.toggle('bi-list');
    headerToggle.classList.toggle('bi-x');
  }
  return (
    <>
      <header id="header" className="header dark-background d-flex flex-column">
        <i className="header-toggle d-xl-none bi bi-list" onClick={headerToggle}></i>

        <div className="profile-img">
          <img src="myimage.jpg" alt="" className="img-fluid" />
        </div>

        <a href="index.html" className="logo d-flex align-items-center justify-content-center">
          <h1 className="sitename">Nikhil Gahane</h1>
        </a>

        <div className="social-links text-center">
          <a href="https://www.facebook.com/share/1ER3uqn3Sg" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/nikhilgahane?igsh=MTVubzUwZzVldzk0Yg==" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="https://github.com/Ng462001" className="GitHub"><i className="bi bi-github"></i></a>
          <a href="https://www.linkedin.com/in/nikhil-gahane-94b967220" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><NavLink to="/" className="active"><i className="bi bi-house navicon"></i>Home</NavLink></li>
            <li><NavLink to="/about"><i className="bi bi-person navicon"></i> About</NavLink></li>
            <li><NavLink to="/resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</NavLink></li>
            <li><NavLink to="/project"><i className="bi bi-hdd-stack navicon"></i> Projects</NavLink></li>
            <li><NavLink to="/contact"><i className="bi bi-envelope navicon"></i> Contact</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Sidebar