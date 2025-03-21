import React, { useEffect } from "react";
import Typed from "typed.js";

const Home = () => {
    useEffect(() => {
        const typed = new Typed(".typed", {
            strings: ["Student", "Developer", "Freelancer"],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1000,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id='home' className="hero section dark-background">
            <img src="/background.jpg" alt="background" />
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <h2>Nikhil Gahane</h2>
                <p>
                    I'm <span className="typed"></span>
                </p>
            </div>
        </section>
    );
};

export default Home;
