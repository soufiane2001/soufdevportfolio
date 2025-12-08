import React from 'react';
import './style.css';
import souf from './IMG_7895.jpeg';

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <div className="about-image-section">
          <div className="image-wrapper">
            <img src={souf} alt="Soufiane Boutatss" className="about-image" loading="lazy" />
            <div className="image-glow"></div>
          </div>
        </div>

        <div className="about-text-section">
          <h4 className="about-subtitle">About me</h4>
          <h2 className="about-title">
            Failure is the condiment <br /> that gives <span className="highlight-text">Success</span>
          </h2>
          <p className="about-description">
            I'm Soufiane, a passionate and skilled web and mobile developer specializing in modern technologies like React.js and React Native. With a strong focus on crafting intuitive and responsive user interfaces, I ensure that every application I develop offers an exceptional user experience across all devices. My expertise extends to backend development with Laravel, where I design and implement secure, scalable, and efficient server-side logic to complement the front-end.
          </p>
          <button 
            className="download-button"
            onClick={() => window.location.href = `${process.env.PUBLIC_URL}/Soufianelt.pdf`}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
