import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">My Portfolio</h1>
            <span className="footer__subtitle">A showcase of my work</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#about" className="footer__link">About Me</a>
            </li>
            <li>
              <a href="#projects" className="footer__link">Projects</a>
            </li>
            <li>
              <a href="#contact" className="footer__link">Contact Me</a>
            </li>
          </ul>

          <div class="footer__socials">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="footer__social">
              <i className="uil uil-linkedin"></i>
            </a>

            <a href="https://github.com/" target="_blank" rel="noreferrer" className="footer__social">
              <i className="uil uil-github-alt"></i>
            </a>

            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="footer__social">
              <i className="uil uil-twitter"></i>
            </a>
          </div>
        </div>

        <p className="footer__copy">© 2023 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
