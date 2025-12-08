import React from 'react';
import './style.css';
import { FaReact, FaLaravel, FaPhp, FaBootstrap, FaAndroid, FaWordpress, FaAngular, FaJava, FaGooglePlusG } from 'react-icons/fa';
import { SiExpo, SiMysql, SiNextdotjs, SiFirebase, SiTailwindcss, SiTypescript } from 'react-icons/si';

const skillsData = [
  { name: 'React', icon: <FaReact />, level: 8, color: '#61dafb' },
  { name: 'React Native', icon: <FaReact />, level: 7, color: '#61dafb' },
  { name: 'Expo CLI', icon: <SiExpo />, level: 7, color: '#000020' },
  { name: 'Laravel', icon: <FaLaravel />, level: 7, color: '#ff2d20' },
  { name: 'MySQL', icon: <SiMysql />, level: 7, color: '#4479a1' },
  { name: 'TypeScript', icon: <SiTypescript />, level: 7, color: '#3178c6' },
  { name: 'Android Studio', icon: <FaAndroid />, level: 5, color: '#3ddc84' },
  { name: 'PHP', icon: <FaPhp />, level: 7, color: '#777bb4' },
  { name: 'Angular', icon: <FaAngular />, level: 4, color: '#dd0031' },
  { name: 'WordPress', icon: <FaWordpress />, level: 5, color: '#21759b' },
  { name: 'Next.js', icon: <SiNextdotjs />, level: 7, color: '#ffffff' },
  { name: 'Firebase', icon: <SiFirebase />, level: 6, color: '#ffca28' },
  { name: 'Java', icon: <FaJava />, level: 4, color: '#f89820' },
  { name: 'Bootstrap', icon: <FaBootstrap />, level: 9, color: '#7952b3' },
  { name: 'Tailwind', icon: <SiTailwindcss />, level: 7, color: '#06b6d4' },
  { name: 'Services', icon: <FaGooglePlusG />, level: 5, color: '#db4437' }
];

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <p className="skills-subtitle">Technologies I work with</p>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <span className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </span>
              <span className="skill-name">{skill.name}</span>
            </div>

            <div className="skill-level-container">
              <div className="skill-dots">
                {Array.from({ length: 10 }).map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className={`dot ${dotIndex < skill.level ? 'filled' : ''}`}
                  />
                ))}
              </div>
              <span className="skill-percentage">{skill.level * 10}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
