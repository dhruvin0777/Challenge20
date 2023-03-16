import React from 'react';

const Contact = () => {
  return (
    <section className="contact section main" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="uil uil-phone contact__icon"></i>

            <div>
              <h3 className="contact__title">Phone</h3>
              <span className="contact__subtitle">555-555-5555</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-envelope contact__icon"></i>

            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">your-email@example.com</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-map-marker contact__icon"></i>

            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">Your City, Your Country</span>
            </div>
          </div>
        </div>

        <form className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label className="contact__label" htmlFor="name">
                Name
              </label>
              <input className="contact__input" type="text" id="name" />
            </div>

            <div className="contact__content">
              <label className="contact__label" htmlFor="email">
                Email
              </label>
              <input className="contact__input" type="email" id="email" />
            </div>
          </div>

          <div className="contact__content">
            <label className="contact__label" htmlFor="project">
              Project
            </label>
            <input className="contact__input" type="text" id="project" />
          </div>

          <div className="contact__content">
            <label className="contact__label" htmlFor="message">
              Message
            </label>
            <textarea className="contact__input" rows="5" id="message"></textarea>
          </div>

          <button type="submit" className="button button--flex">
            Send Message<i className="uil uil-message button__icon"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
