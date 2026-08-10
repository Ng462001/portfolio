import React from 'react'

const About = () => {

  const frontendSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 85 }
  ];

  const backendSkills = [
    { name: "Node.js & Express.js", level: 80 },
    { name: "SQL (MySQL)", level: 80 },
    { name: "Java", level: 80 },
    { name: "Spring Boot", level: 70 }
  ];

  return (
    <>
      {/* ABOUT SECTION */}
      <section id="about" className="about section">

        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>
            Hi, I'm <strong>Nikhil Gahane</strong> from Nagpur — a passionate
            <strong> Full Stack Web Developer</strong> with a strong foundation
            in building scalable and user-friendly applications.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">

            <div className="col-lg-4">
              <img src="/about.jpg" className="img-fluid rounded" alt="About" />
            </div>

            <div className="col-lg-8 content">
              <h2>Full Stack Developer</h2>

              <p className="fst-italic py-3">
                I enjoy building user-centric applications using
                <strong> React</strong> for frontend and
                <strong> Node.js</strong> for backend development.
              </p>

              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right" /> <strong>Birthday:</strong> 4 June 2001</li>
                    <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> +91 94422498134</li>
                    <li><i className="bi bi-chevron-right" /> <strong>City:</strong> Nagpur</li>
                  </ul>
                </div>

                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right" /> <strong>Age:</strong> {new Date().getFullYear() - 2001}</li>
                    <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> MCA</li>
                    <li><i className="bi bi-chevron-right" /> <strong>Email:</strong> nikhil462001@gmail.com</li>
                  </ul>
                </div>
              </div>

              <p className="py-3">
                I have worked on impactful projects, including an
                <strong> e-commerce website</strong> and an
                <strong> e-learning platform built using the MERN stack</strong>.
                During my internship at <strong>Digital Ipsum</strong>, I gained
                hands-on experience working on real-world web applications.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* SKILLS SECTION */}
      <section id="skills" className="skills section light-background">

        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <p>
            Skilled in frontend and backend development with hands-on experience in
            React, Node.js, Express.js, Java (Spring Boot), and SQL.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content">

            {/* FRONTEND */}
            <div className="col-lg-6">
              <h5 className="mb-3">Frontend</h5>
              {frontendSkills.map((skill, index) => (
                <div className="progress" key={index}>
                  <span className="skill">
                    {skill.name} <i className="val">{skill.level}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* BACKEND */}
            <div className="col-lg-6">
              <h5 className="mb-3">Backend</h5>
              {backendSkills.map((skill, index) => (
                <div className="progress" key={index}>
                  <span className="skill">
                    {skill.name} <i className="val">{skill.level}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: `${skill.level}%` }}
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