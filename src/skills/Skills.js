import React from 'react';
import './style.css';
import { FaReact, FaLaravel, FaPhp, FaBootstrap, FaAndroid,FaWordpress ,FaAngular ,FaJava ,FaGooglePlus, FaGooglePlusG } from 'react-icons/fa';
import { SiExpo, SiMysql, SiNextdotjs, SiFirebase, SiTailwindcss,SiTypescript  } from 'react-icons/si';


const skillsData = [
  { name: 'React', icon: <FaReact />, level: 8 },
  { name: 'React Native', icon: <FaReact />, level: 7 },
  { name: 'Expo CLI', icon: <SiExpo />, level: 7 },
  { name: 'Laravel', icon: <FaLaravel />, level: 7 },
  { name: 'MySQL', icon: <SiMysql />, level: 7 },
  { name: 'Typescript', icon: <SiTypescript/>, level: 7 },
  { name: 'Android Studio', icon: <FaAndroid />, level: 5 },
  { name: 'PHP', icon: <FaPhp />, level: 7 },
   { name: 'Angular', icon: <FaAngular />, level: 4 },
    { name: 'Wordpress', icon: <FaWordpress  />, level: 5 },
  { name: 'Next.js', icon: <SiNextdotjs />, level: 7 },
  { name: 'Firebase', icon: <SiFirebase />, level: 6 },
   { name: 'Java', icon: <FaJava />, level: 4 },
  { name: 'Bootstrap', icon: <FaBootstrap />, level: 9 },
  { name: 'Tailwind', icon: <SiTailwindcss />, level: 7 },
  { name: 'Services', icon: <FaGooglePlusG />, level: 5 }
];

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-row">
            <div className="skill-info">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
            <div className="skill-dots">
              {Array.from({ length: 10 }).map((_, dotIndex) => (
                <span
                  key={dotIndex}
                  className={`dot ${dotIndex < skill.level ? 'filled' : ''}`}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
