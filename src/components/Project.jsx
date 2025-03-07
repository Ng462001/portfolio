import React from 'react'
import projects from '../projectData/project'

const Project = () => {
  return (
    <>
      <section id='project' className="section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Project</h2>
          <p>
            With hands-on experience in developing dynamic and interactive web applications, I have successfully built projects are mentioned below.
          </p>
        </div>

        <div className='d-flex justify-content-around gap-5 gap-lg-0 p-4 flex-wrap'>
          {projects.map((project, index) => (
            <div className="card mt-3" key={index}>
              <img src={project.image_src} className="card-img-top" height="200px" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold text-center">{project.title}</h5>
                <h6 className='text-muted'>{project.language}</h6>
                <p className="card-text mt-2 mb-2" style={{ textAlign: "justify" }}>{project.desc}</p>
                <div className='d-flex justify-content-center gap-3 mt-3'>
                  <a href={project.github_link} target='_blank' className="btn btn-outline-secondary"> <i className="bi bi-github"></i> GitHub</a>
                  <a href={project.website_link} target='_blank' className="btn btn-outline-success"><i className="bi bi-link"></i> Link</a>
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </section>
    </>

  )
}

export default Project