import React from 'react';
import Navigation from './components/Navigation.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Qualifications from './components/Qualifications.js';
import Services from './components/Services.js';
import Portfolio from './components/Portfolio.js';
import Projects from './components/Projects.js';
import Testimonials from './components/Testimonials.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import './css/style.css';

function App() {
  const sections = [Home, About, Skills, Qualifications, Services, Portfolio, Projects, Testimonials, Contact];
  const renderedSections = sections.map((Section) => <Section />);
  return (
    <div>
      <Navigation />
      {renderedSections}
      <Footer />
    </div>
  );
}

export default App;
