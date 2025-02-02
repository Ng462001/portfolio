import React, { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const hideSidebar = (id) => {
    setShowSidebar(false);
    setActiveLink(id);
  };

  return (
    <>
      <header id="header" className={`header dark-background d-flex flex-column ${showSidebar ? "header-show" : ""}`}>
        <i className={`header-toggle d-xl-none bi ${showSidebar ? "bi-x" : "bi-list"}`} onClick={toggleSidebar}></i>

        <div className="profile-img">
          <img src="myimage.jpg" alt="" className="img-fluid" />
        </div>

        <a href="/" className="logo d-flex align-items-center justify-content-center">
          <h1 className="sitename">Nikhil Gahane</h1>
        </a>

        <div className="social-links text-center">
          <a href="https://www.facebook.com/share/1ER3uqn3Sg" target="_blank" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/nikhilgahane?igsh=MTVubzUwZzVldzk0Yg==" target="_blank" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://github.com/Ng462001" target="_blank" className="GitHub">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/nikhil-gahane-94b967220" target="_blank" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a
                href="#home"
                className={activeLink === "#home" ? "active" : ""}
                onClick={() => hideSidebar("#home")}
              >
                <i className="bi bi-house navicon"></i> Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeLink === "#about" ? "active" : ""}
                onClick={() => hideSidebar("#about")}
              >
                <i className="bi bi-person navicon"></i> About
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className={activeLink === "#resume" ? "active" : ""}
                onClick={() => hideSidebar("#resume")}
              >
                <i className="bi bi-file-earmark-text navicon"></i> Resume
              </a>
            </li>
            <li>
              <a
                href="#project"
                className={activeLink === "#project" ? "active" : ""}
                onClick={() => hideSidebar("#project")}
              >
                <i className="bi bi-hdd-stack navicon"></i> Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeLink === "#contact" ? "active" : ""}
                onClick={() => hideSidebar("#contact")}
              >
                <i className="bi bi-envelope navicon"></i> Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Sidebar;
