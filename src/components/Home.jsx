import React, { useEffect } from 'react'

const Home = () => {
  
    return (

        <section id="hero" className="hero section dark-background">
            <img src="/background.jpg" alt="background" />
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <h2>Nikhil Gahane</h2>
                <p>
                    I'm <span className="typed" data-typed-items="Student, Developer">Freelancer</span>
                    <span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
                    <span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
                </p>
            </div>
        </section>
    )
}

export default Home