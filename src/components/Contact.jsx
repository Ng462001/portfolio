import React from 'react';

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <section id='contact' className="contact section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>
            I'm always open to new opportunities, collaborations, or just a friendly conversation. Whether you have a project idea, job opportunity, or just want to say hello, feel free to reach out! I'll get back to you as soon as possible.
          </p>
        </div>
        {/* End Section Title */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className="info-wrap">
                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Address</h3>
                    <p>Master Colony, Kurza Road, Bramhapuri - 441206</p>
                  </div>
                </div>
                {/* End Info Item */}

                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>+91 9422498134</p>
                  </div>
                </div>
                {/* End Info Item */}

                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>nikhil462001@gmail.com</p>
                  </div>
                </div>
                {/* End Info Item */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.2447172859665!2d79.85879827485026!3d20.618879680929847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2c9b000001350d%3A0xa01a3f68e0b6305e!2sMASTER%20COLONY!5e0!3m2!1sen!2sin!4v1738301348149!5m2!1sen!2sin"
                  style={{ border: 0, width: '100%', height: '270px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>

            <div className="col-lg-7">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <input type="hidden" name="access_key" value={import.meta.env.VITE_ACCESS_KEY}></input>
                <div className="row gy-4">
                  <div className="col-md-6">
                    <label htmlFor="name-field" className="pb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name-field"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email-field" className="pb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email-field"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="subject-field" className="pb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject-field"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="message-field" className="pb-2">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="10"
                      id="message-field"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
            {/* End Contact Form */}
          </div>
        </div>
      </section>
      {/* /Contact Section */}

      <footer id="footer" className="footer position-relative light-background">
        <div className="container">
          <div className="copyright text-center">
            <p>&copy; <span>Copyright 2025</span> <strong className="px-1 sitename">NGTech</strong> <span>All Rights Reserved</span></p>
          </div>
          <div className="credits">
            Designed by Nikhil
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
