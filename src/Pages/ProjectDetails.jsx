import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import projects from "../projectData/project";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id) || projects[parseInt(id, 10)] || projects[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!project) {
    return (
      <section className="py-5">
        <div className="container text-center py-5">
          <h2>Project Not Found</h2>
          <button onClick={() => navigate("/")} className="btn btn-primary mt-3" style={{ backgroundColor: "#149ddd", borderColor: "#149ddd" }}>
            <i className="bi bi-arrow-left me-2"></i> Back to Portfolio
          </button>
        </div>
      </section>
    );
  }

  const otherProjects = projects.filter((p) => p.id !== project.id);

  return (
    <div style={{ backgroundColor: "#f8f9fa", color: "#272829", minHeight: "100vh", fontFamily: "var(--default-font)" }}>
      {/* Top Sticky Header */}
      <header className="py-3 px-4 border-bottom bg-white sticky-top shadow-sm" style={{ zIndex: 1000 }}>
        <div className="container d-flex justify-content-between align-items-center">
          <button
            onClick={() => navigate("/")}
            className="btn btn-outline-primary d-flex align-items-center gap-2 fw-semibold rounded-pill px-3"
            style={{ color: "#149ddd", borderColor: "#149ddd" }}
          >
            <i className="bi bi-arrow-left fs-5"></i> Back to Portfolio
          </button>

          <Link to="/" className="text-dark text-decoration-none fw-bold fs-4" style={{ fontFamily: "var(--heading-font)" }}>
            Nikhil<span style={{ color: "#149ddd" }}>.Portfolio</span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="py-5">
        <div className="container">
          {/* Breadcrumb Navigation */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/" style={{ color: "#149ddd" }}>Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{project.title}</li>
            </ol>
          </nav>

          {/* Hero Banner Card */}
          <div className="bg-white rounded-4 shadow-sm p-4 p-lg-5 mb-4 border-0" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)" }}>
            <div className="row g-4 align-items-center">
              <div className="col-lg-8">
                <div className="d-flex align-items-center gap-2 mb-3 flex-wrap">
                  <span className="badge px-3 py-2 rounded-pill" style={{ backgroundColor: "rgba(20, 157, 221, 0.15)", color: "#149ddd", fontWeight: "600" }}>
                    <i className="bi bi-code-square me-1"></i> Featured Project
                  </span>
                  <span className="badge bg-success bg-opacity-10 text-success border-0 px-3 py-2 rounded-pill font-semibold">
                    <i className="bi bi-check-circle-fill me-1"></i> Deployed & Live
                  </span>
                </div>
                <h1 className="display-5 fw-bold mb-3" style={{ color: "#050d18" }}>{project.title}</h1>
                <p className="lead text-secondary mb-3" style={{ fontSize: "1.15rem" }}>{project.desc}</p>
                <div className="d-flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="badge px-3 py-2 rounded-pill" style={{ backgroundColor: "#ffffff", color: "#149ddd", border: "1px solid rgba(20, 157, 221, 0.3)", fontWeight: "500" }}>
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <div className="col-lg-4 text-lg-end">
                <div className="d-flex flex-column gap-3">
                  {project.website_link && (
                    <a
                      href={project.website_link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn text-white fw-bold py-3 px-4 shadow-sm d-flex align-items-center justify-content-center gap-2 rounded-3"
                      style={{ backgroundColor: "#149ddd", borderColor: "#149ddd" }}
                    >
                      <i className="bi bi-box-arrow-up-right fs-5"></i> Live Preview
                    </a>
                  )}
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-secondary fw-bold py-3 px-4 d-flex align-items-center justify-content-center gap-2 rounded-3"
                      style={{ borderColor: "#dee2e6" }}
                    >
                      <i className="bi bi-github fs-5"></i> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Row 1: Image Showcase & Specifications (Equal Height Row) */}
          <div className="row g-4 mb-4 align-items-stretch">
            {/* Left: Project Image */}
            <div className="col-lg-6">
              <div className="bg-white rounded-4 shadow-sm overflow-hidden h-100 border-0 p-2 d-flex align-items-center justify-content-center">
                <img
                  src={project.image_src}
                  alt={project.title}
                  className="img-fluid rounded-3 w-100 object-fit-cover"
                  style={{ height: "100%", maxHeight: "380px", minHeight: "280px" }}
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
              </div>
            </div>

            {/* Right: Specifications Panel */}
            <div className="col-lg-6">
              <div className="bg-white rounded-4 shadow-sm p-4 p-lg-4 h-100 border-0 d-flex flex-column justify-content-between">
                <div>
                  <h4 className="fw-bold mb-4" style={{ color: "#050d18" }}>
                    <i className="bi bi-info-circle me-2" style={{ color: "#149ddd" }}></i> Specifications
                  </h4>

                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex justify-content-between align-items-center pb-2 border-bottom">
                      <span className="text-muted small fw-bold text-uppercase">Developer</span>
                      <span className="fw-semibold text-dark">Nikhil Gahane</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center pb-2 border-bottom">
                      <span className="text-muted small fw-bold text-uppercase">Category</span>
                      <span className="fw-semibold text-dark">Web Application</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center pb-2 border-bottom">
                      <span className="text-muted small fw-bold text-uppercase">Status</span>
                      <span className="badge bg-success bg-opacity-10 text-success border-0 px-3 py-1">
                        <i className="bi bi-check-circle me-1"></i> Live
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center pt-1">
                      <span className="text-muted small fw-bold text-uppercase">Primary Stack</span>
                      <div className="text-end">
                        {project.primaryStack.map((tech, idx) => (
                          <span key={idx} className="badge ms-1" style={{ backgroundColor: "rgba(20, 157, 221, 0.1)", color: "#149ddd" }}>
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-top mt-3">
                  <span className="text-muted small d-block mb-1">Looking for similar builds?</span>
                  <a href="#more-projects" className="text-decoration-none fw-semibold small" style={{ color: "#149ddd" }}>
                    Explore Other Projects Below ↓
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Overview & Key Features (Equal Height Row) */}
          <div className="row g-4 mb-5 align-items-stretch">
            {/* Overview Card */}
            <div className="col-lg-6">
              <div className="bg-white rounded-4 shadow-sm p-4 p-lg-4 h-100 border-0 d-flex flex-column">
                <h4 className="fw-bold mb-3" style={{ color: "#050d18" }}>
                  <i className="bi bi-journal-text me-2" style={{ color: "#149ddd" }}></i> Project Overview
                </h4>
                <p className="text-secondary flex-grow-1 mb-0" style={{ fontSize: "1rem", lineHeight: "1.8", textAlign: "justify" }}>
                  {project.fullDescription || project.desc}
                </p>
              </div>
            </div>

            {/* Key Features Card */}
            <div className="col-lg-6">
              <div className="bg-white rounded-4 shadow-sm p-4 p-lg-4 h-100 border-0 d-flex flex-column">
                <h4 className="fw-bold mb-3" style={{ color: "#050d18" }}>
                  <i className="bi bi-stars me-2" style={{ color: "#149ddd" }}></i> Key Features
                </h4>
                <div className="d-flex flex-column gap-2 flex-grow-1 justify-content-around">
                  {(project.features || [
                    "Responsive & Mobile Friendly Layout",
                    "Clean Component Architecture",
                    "Modern State & UI Management",
                    "Optimized Performance & Cross-Browser Support"
                  ]).map((feat, i) => (
                    <div key={i} className="d-flex align-items-center gap-3 p-3 rounded-3" style={{ backgroundColor: "#f8f9fa" }}>
                      <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "30px", height: "30px", backgroundColor: "rgba(20, 157, 221, 0.15)" }}>
                        <i className="bi bi-check-lg" style={{ color: "#149ddd", fontSize: "1.1rem" }}></i>
                      </div>
                      <span className="text-dark fw-medium" style={{ fontSize: "0.95rem" }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: More Projects Section (Strictly Equal Card Heights & Alignments) */}
          {otherProjects.length > 0 && (
            <div id="more-projects" className="mt-5 pt-4 border-top">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h2 className="fw-bold mb-1" style={{ color: "#050d18" }}>More Projects</h2>
                  <p className="text-muted mb-0">Explore other web applications built by Nikhil</p>
                </div>
                <Link to="/" className="btn btn-outline-primary rounded-pill px-4" style={{ color: "#149ddd", borderColor: "#149ddd" }}>
                  View All <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>

              <div className="row g-4 align-items-stretch">
                {otherProjects.slice(0, 3).map((item) => (
                  <div key={item.id} className="col-md-4">
                    <div className="bg-white rounded-4 shadow-sm overflow-hidden border-0 h-100 d-flex flex-column">
                      {/* Image Thumbnail */}
                      <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
                        <img
                          src={item.image_src}
                          className="w-100 h-100 object-fit-cover"
                          alt={item.title}
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
                          }}
                        />
                        <div className="position-absolute top-0 end-0 m-3">
                          <span className="badge bg-white text-dark px-3 py-1 rounded-pill shadow-sm fw-semibold">
                            {item.language.split(",")[0]}
                          </span>
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
                        <div>
                          <h5 className="fw-bold mb-2 text-dark">{item.title}</h5>
                          <p
                            className="text-secondary small mb-3"
                            style={{
                              lineHeight: "1.6",
                              minHeight: "55px",
                              display: "-webkit-box",
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden"
                            }}
                          >
                            {item.desc}
                          </p>
                        </div>
                        <Link
                          to={`/project/${item.id}`}
                          className="btn w-100 fw-semibold rounded-3 py-2 mt-auto"
                          style={{ backgroundColor: "rgba(20, 157, 221, 0.1)", color: "#149ddd", border: "1px solid rgba(20, 157, 221, 0.2)" }}
                        >
                          <i className="bi bi-eye me-1"></i> View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;