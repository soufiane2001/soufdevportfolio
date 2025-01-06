import React from 'react';
import './style.css';


const About = () => {
  return (
    <div className="about-container" id="about" >
      <div className="about-content">
        {/* Left Section: Image with Play Button */}
        <div className="about-image-section">
          <img src={"https://scontent.fcmn1-2.fna.fbcdn.net/v/t39.30808-6/368036462_731235105682386_832498792598238142_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEpkNgJXh8Zmye23O4zSB2dg8YNo522El6Dxg2jnbYSXtl9PvORKUmYBuyYH0O-WWi_NZprqt8ua3kZ8y0aHgQV&_nc_ohc=8Lr0t9lz3HgQ7kNvgERWH9W&_nc_oc=AdgOaVyiNcb-hRM-GcV8qvxC0IENofvzZALPyIzmaft_z7_XImWlR68op-GQ20QaHpw&_nc_zt=23&_nc_ht=scontent.fcmn1-2.fna&_nc_gid=AmgDxoRvxpgV2uYIWd31nYH&oh=00_AYCw37uaLQKM8dqk9UFQHaX6lASgBGdkyy3jRlOPtN39jA&oe=6781AA0A"} alt="About Us" className="about-image" />
         
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
          <button className="download-button"onClick={() =>  window.location.href =`${process.env.PUBLIC_URL}/cv25.pdf`} >Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default About;
