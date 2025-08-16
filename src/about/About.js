import React from 'react';
import './style.css';
import souf from './IMG_7895.jpeg';

const About = () => {
  return (
    <div className="about-container" id="about" >
      <div className="about-content">
        {/* Left Section: Image with Play Button */}
        <div className="about-image-section">
          <img src={souf} alt="About Us" className="about-image" />
         
        </div>

        {/* Right Section: Text Content */}
        <div className="about-text-section">
          <h4>About me</h4>
          <h2>
            Failure is the condiment <br /> that gives <span>Success</span>
          </h2>
          <p>
          I'm Soufiane, a passionate and skilled web and mobile developer specializing in modern technologies like React.js and React Native. With a strong focus on crafting intuitive and responsive user interfaces, I ensure that every application I develop offers an exceptional user experience across all devices. My expertise extends to backend development with Laravel, where I design and implement secure, scalable, and efficient server-side logic to complement the front-end. With a deep understanding of the full software development lifecycle, I am adept at translating complex requirements into functional, high-quality solutions. My approach to development emphasizes clean code, best practices, and continuous learning to stay at the forefront of industry trends. Whether it’s building mobile applications or robust web platforms, I am committed to delivering projects that exceed expectations and drive success
          </p>
          <button className="download-button"onClick={() =>  window.location.href =`${process.env.PUBLIC_URL}/Soufianelt.pdf`} >Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default About;
