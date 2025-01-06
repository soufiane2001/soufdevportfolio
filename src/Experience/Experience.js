

import React from 'react';
import './style.css';


const experiences = [
  {
    title: 'Junior Frontend Developer',
    company: 'NevTach',
    period: '2021',
    description: [
      'Built responsive websites from scratch, focusing on clean, maintainable code using HTML, CSS, and JavaScript.',
      'Worked closely with the backend team to integrate APIs and handle data fetching, ensuring seamless interaction between frontend and backend.',
      
    ]
  },

  {
    title: 'Frontend Developer',
    company: 'CASAKOOL',
    period: '2022 – 2023',
    description: [
      'Developed and maintained dynamic, responsive websites using HTML5, CSS3, JavaScript (ES6+), and React.js,Electron js to build ERP software',
      'Collaborated with UI/UX designers to bring mockups to life, enhancing user interactions and visual elements with animations and transitions.',
      'Implemented API integrations using RESTful services, ensuring smooth data flow between frontend and backend systems.'
    ]
  },
 
  {
    title: 'Fullstaxk Developer',
    company: 'KZ LEVAGE',
    period: '2024',
    description: [
      'Developed and maintained dynamic, responsive websites using php 8, ensuring optimal user experience and performance,and handling data of clients',
      'Implemented API integrations using RESTful services, ensuring smooth data flow between frontend and backend systems.'
    ]
  },
 
];

const Experience = () => {
  return (
    <div className="experience-container" id="experiences"  >
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-dot"></div>
            <div className="experience-details">
              <h3>{exp.title} <span>| {exp.company}</span></h3>
              <p className="experience-period">{exp.period}</p>
              <ul>
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
