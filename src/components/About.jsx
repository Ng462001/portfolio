import React from 'react'

const About = () => {
  return (
    <>
      <section id="about" className="about section">

        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>
            I'm Nikhil Gahane from Bramhapuri, a passionate web developer with a strong foundation in full-stack
            development.
            I have experience in HTML, CSS, JavaScript, React, Node.js, and MongoDB.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="/about.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 content">
              <h2>Student &amp; Web Developer.</h2>
              <p className="fst-italic py-3">
                Currently, I enjoy building user-centric applications, leveraging React for frontend and Node for backend
                development.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{' '}
                      <strong>Birthday:</strong> <span>4 June 2001</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{' '}
                      <strong>Phone:</strong> <span>+91 94422498134</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{' '}
                      <strong>City:</strong> <span>Bramhapuri</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{' '}
                      <strong>Age:</strong> <span>23</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{' '}
                      <strong>Degree:</strong> <span>MCA(Master of Computer Application)</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{' '}
                      <strong>Email:</strong> <span>nikhil462001@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
                I've worked on impactful projects, including an e-learning website using the MERN stack and a jobs-related
                platform developed with React. During my internship at Anweb Technology, I honed my skills as a web
                developer.
              </p>
            </div>
          </div>

        </div>

      </section>

      <section id="skills" className="skills section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <p>I have experience in HTML, CSS, JavaScript, React, Node.js, and MongoDB.</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation">
            <div className="col-lg-6">
              {['HTML', 'CSS', 'JavaScript'].map((skill, index) => (
                <div className="progress" key={index}>
                  <span className="skill">
                    <span>{skill}</span> <i className="val">{[100, 90, 85][index]}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={[100, 90, 85][index]}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${[100, 90, 85][index]}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-6">
              {['React', 'Node and Express', 'MySQL'].map((skill, index) => (
                <div className="progress" key={index}>
                  <span className="skill">
                    <span>{skill}</span> <i className="val">{[80, 60, 70][index]}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={[80, 60, 70][index]}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${[80, 60, 70][index]}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About