import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const hideSidebar = (id) => {
    setShowSidebar(false);
    setActiveLink(id);
    if (location.pathname !== "/") {
      navigate(`/${id}`);
    }
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const handleScroll = () => {
      const sectionIds = ["home", "about", "resume", "project", "contact"];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (windowHeight + scrollPosition >= fullHeight - 50) {
        setActiveLink("#contact");
        return;
      }

      const offset = 200;
      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveLink(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const navItems = [
    { id: "#home", label: "Home", icon: "bi-house" },
    { id: "#about", label: "About", icon: "bi-person" },
    { id: "#resume", label: "Resume", icon: "bi-file-earmark-text" },
    { id: "#project", label: "Projects", icon: "bi-hdd-stack" },
    { id: "#contact", label: "Contact", icon: "bi-envelope" },
  ];

  return (
    <>
      <header id="header" className={`header dark-background d-flex flex-column ${showSidebar ? "header-show" : ""}`}>
        <i className={`header-toggle d-xl-none bi ${showSidebar ? "bi-x" : "bi-list"}`} onClick={toggleSidebar}></i>

        <div className="profile-img">
          <img src="/myimage.jpg" alt="" className="img-fluid" onError={(e) => { e.target.src = "myimage.jpg"; }} />
        </div>

        <Link to="/" className="logo d-flex align-items-center justify-content-center">
          <h1 className="sitename">Nikhil Gahane</h1>
        </Link>

        <div className="social-links text-center">
          <a href="https://www.facebook.com/share/1ER3uqn3Sg" target="_blank" rel="noreferrer" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/nikhilgahane?igsh=MTVubzUwZzVldzk0Yg==" target="_blank" rel="noreferrer" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://github.com/Ng462001" target="_blank" rel="noreferrer" className="GitHub">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/nikhil-gahane-94b967220" target="_blank" rel="noreferrer" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={location.pathname === "/" ? item.id : `/${item.id}`}
                  className={location.pathname === "/" && activeLink === item.id ? "active" : ""}
                  onClick={(e) => {
                    if (location.pathname !== "/") {
                      e.preventDefault();
                      hideSidebar(item.id);
                    } else {
                      hideSidebar(item.id);
                    }
                  }}
                >
                  <i className={`bi ${item.icon} navicon`}></i> {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Sidebar;
