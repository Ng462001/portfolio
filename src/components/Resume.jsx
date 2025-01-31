import React from 'react'

const Resume = () => {
  return (
    <>
      <section id="resume" className="resume section">

        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p >
            I'm Nikhil Gahane from Bramhapuri, a passionate web developer with a strong foundation in full-stack
            development.
            I thrive on creating user-centric solutions, solving complex problems, and contributing to innovative web applications. If you’re looking for a developer with a blend of creativity and technical expertise, I’m excited to connect and collaborate.
            Let’s build something amazing together! 🚀
          </p>
        </div>

        {/* End Section Title */}

        <div className="container">

          <div className="row">

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

              <h3 className="resume-title">Sumary</h3>

              <div className="resume-item pb-0">
                <h4>Nikhil Gahane</h4>
                <p>
                  <em>
                    "Passionate web developer with expertise in React and Spring Boot, experienced in building
                    full-stack applications. Proficient in creating dynamic and user-friendly web solutions, including
                    an e-learning platform (MERN stack) and a jobs-related project. Completed a web development
                    internship at Anweb Technology, refining skills in frontend and backend technologies. Dedicated to
                    delivering innovative, efficient, and engaging digital experiences."
                  </em>
                </p>
                <ul>
                  <li>Master Colony, Bramhapuri</li>
                  <li>9422498134</li>
                  <li>nikhil462001@gmail.com</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>

              <div className="resume-item">
                <h4>Master of Computer Applications(MCA)</h4>
                <p><em>Jaywant Rao College of Engineering, Hadpsar Pune</em></p>
                <h5>2022 - 2024</h5>
                <h5>Percentage: 71%</h5>
              </div>

              <div className="resume-item">
                <h4>Bachelor of Computer Application(BCA)</h4>
                <p><em>Prerna College, Nagpur</em></p>
                <h5>2019 - 2022</h5>
                <h5>Percentage: 81.15%</h5>
              </div>

            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">

              <h3 className="resume-title">Projects</h3>

              <div className="resume-item">
                <h4>E-Course Website</h4>
                <h5>May 2024</h5>
                <p>
                  <em>
                    React, Bootstrap, Node, Express, MySQL (MERN)
                  </em>
                </p>
                <ul>
                  <li>
                    Designed and developed a comprehensive e-course website to facilitate online learning, featuring
                    course listings, enrollment, and user profiles.
                  </li>
                  <li>
                    Implemented secure user authentication and authorization mechanisms to protect user data and
                    restrict access to course materials.
                  </li>
                  <li>
                    Built features for course creation, updates, and deletion, enabling administrators to manage course
                    content efficiently.
                  </li>
                  <li>
                    <a href="https://ngtech-olive.vercel.app">Project Link</a>
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Job Search Project</h4>
                <h5>Jan 2025</h5>
                <p>
                  <em>
                    HTML, CSS, Bootstrap, React
                  </em>
                </p>
                <ul>
                  <li>
                    Implemented secure user authentication and authorization to ensure data protection and role-based
                    access.
                  </li>
                  <li>
                    Built features for fetching job posting, updates, and deletions, enabling Users to manage listings
                    efficiently.
                  </li>
                  <li>
                    Integrated responsive design and intuitive UI using React to enhance user experience.
                  </li>
                  <li>
                    <a href="https://jobsearchproject.vercel.app">Project Link</a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  )
}

export default Resume
