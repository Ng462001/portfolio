import React from 'react'
import { Link } from 'react-router-dom'
import projects from '../projectData/project'

const Project = () => {
  return (
    <>
      <section id='project' className="section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Projects</h2>
          <p>
            With hands-on experience in developing dynamic and interactive web applications, I have successfully built the projects mentioned below.
          </p>
        </div>

        <div className='d-flex justify-content-around gap-4 p-4 flex-wrap'>
          {projects.map((project, index) => (
            <div className="card mt-3" key={project.id || index}>
              <img src={project.image_src} className="card-img-top" height="200px" alt={project.title} />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-bold text-center">{project.title}</h5>
                  <h6 className='text-muted text-center small mb-2'>{project.language}</h6>
                  <p className="card-text mt-2 mb-2" style={{ textAlign: "justify" }}>{project.desc}</p>
                </div>
                <div>
                  <Link to={`/project/${project.id}`} style={{ backgroundColor: "#149ddd" }} className="btn text-white w-100 mb-2 fw-semibold">
                    <i className="bi bi-eye-fill me-1"></i> View Details
                  </Link>
                  <div className='d-flex justify-content-between gap-2'>
                    <a href={project.github_link} target='_blank' rel='noreferrer' className="btn btn-outline-secondary flex-grow-1 text-center">
                      <i className="bi bi-github"></i> GitHub
                    </a>
                    <a href={project.website_link} target='_blank' rel='noreferrer' className="btn btn-outline-success flex-grow-1 text-center">
                      <i className="bi bi-link"></i> Live Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Project