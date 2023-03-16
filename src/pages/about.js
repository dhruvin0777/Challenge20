import React from "react";

const MyAbout = () => {
return (
<section className="my-about section main" id="my-about">
<h2 className="section__title">Who Am I?</h2>
<span className="section__subtitle">A Brief Introduction</span>
<div className="my-about__container container grid">
            <img src="/images/my-about-pic.jpg" alt="my profile pic" className="my-about__img"/> 

            <div className="my-about__data">
                <p className="my-about__description">Hi there! I'm Dhruvin, a budding software engineer who is passionate about coding and creating digital solutions to real-world problems. After having worked in the marketing industry for several years, I decided to pivot towards tech and haven't looked back since. <br /> <br />
                    I'm proficient in HTML, CSS, and JavaScript, and currently, I'm honing my skills in node.js, React, and MongoDB for back-end development. In my free time, I also dabble in graphic design and love bringing my creative visions to life through digital media. <br /> <br />
                    The process of learning and constantly evolving in the tech world is something that excites me, and I'm always up for a new challenge. Let's connect and create something awesome together!
                </p>
            </div>
            <div className="my-about__info">
                <div>
                    <span className="my-about__info-title">9+</span>
                    <span className="my-about__info-name">Months <br /> of experience</span>
                </div>

                <div>
                    <span className="my-about__info-title">25+</span>
                    <span className="my-about__info-name">Completed <br /> projects</span>
                </div>

                <div>
                    <span className="my-about__info-title">2+</span>
                    <span className="my-about__info-name">Companies <br /> worked</span>
                </div>
            </div>

            <div className="my-about__buttons">
                <a download="" href="./assets/images/Samantha Resume.pdf" className="button button--flex">
                  Download My Resume<i className="uil uil-download-alt button__icon"></i>
                </a>
            </div>
        </div>
    </section>        
)
}

export default MyAbout;