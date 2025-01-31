import React from 'react'

const Project = () => {
  return (
    <>
      <div className="container section-title mt-5" data-aos="fade-up">
        <h2>Project</h2>
        <p>
          "I'm Nikhil Gahane from Bramhapuri, a passionate web developer with a strong foundation in full-stack
          development."
        </p>
      </div>

      <div className='d-flex justify-content-around gap-5 gap-lg-0 p-4 flex-wrap'>

        <div className="card" style={{ width: "18rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
          <img src="/portfolio/e-learning.jpg" className="card-img-top" height="200px" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold text-center">E-Course Site</h5>
            <i className=' text-danger text-center m-3'>React, Node.js, Express, MySql</i>
            <p className="card-text mt-2 mb-2" style={{ textAlign: "justify" }}>This web page is a part of my portfolio. It is a simple React application that displays a simple web page with a navigation bar and a few sections.</p>
            <div className='d-flex justify-content-center gap-3'>
              <a href="https://github.com/Ng462001/ngtech" className="btn btn-primary"> <i className="bi bi-github"></i> GitHub</a>
              <a href="https://ngtech-olive.vercel.app/" className="btn btn-primary">Link</a>
            </div>
          </div>
        </div>

         <div className="card" style={{ width: "18rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
          <img src="/portfolio/job-search.jpg" className="card-img-top" height="200px" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold text-center">Job Search Website</h5>
            <i className='m-4 text-danger'>HTML, CSS, Bootstrap, React</i>
            <p className="card-text mt-2 mb-2" style={{ textAlign: "justify" }}>This web page is a part of my portfolio. It is a simple React application that displays a simple web page with a navigation bar and a few sections.</p>
            <div className='d-flex justify-content-center gap-3'>
              <a href="https://github.com/Ng462001/jobs-project" className="btn btn-primary"> <i className="bi bi-github"></i> GitHub</a>
              <a href="https://jobsearchproject.vercel.app/" className="btn btn-primary">Link</a>
            </div>
          </div>
        </div>

         <div className="card" style={{ width: "18rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
          <img src="/portfolio/e-learning-html.png" className="card-img-top" height="200px" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold text-center">E-learning Website</h5>
            <i className='m-2 text-danger'>HTML, CSS, JavaScript, Bootstrap</i>
            <p className="card-text mt-2 mb-2" style={{ textAlign: "justify" }}>This web page is a part of my portfolio. It is a simple React application that displays a simple web page with a navigation bar and a few sections.</p>
            <div className='d-flex justify-content-center gap-3'>
              <a href="https://github.com/Ng462001/e-learning-site" className="btn btn-primary"> <i className="bi bi-github"></i> GitHub</a>
              <a href="https://e-learning-project-live.vercel.app/" className="btn btn-primary">Link</a>
            </div>
          </div>
        </div>

      </div>
    </>

  )
}

export default Project