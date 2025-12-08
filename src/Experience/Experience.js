import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./style.css";

const experiences = [
  {
    title: "Junior Frontend Developer",
    company: "NevTach",
    period: "2021",
    description: [
      "Built responsive websites from scratch, focusing on clean, maintainable code using HTML, CSS, and JavaScript.",
      "Worked closely with the backend team to integrate APIs and handle data fetching, ensuring seamless interaction between frontend and backend.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "CASAKOOL",
    period: "2022 – 2023",
    description: [
      "Developed and maintained dynamic, responsive websites using HTML5, CSS3, JavaScript (ES6+), and React.js, Electron js to build ERP software.",
      "Collaborated with UI/UX designers to bring mockups to life, enhancing user interactions and visual elements with animations and transitions.",
      "Implemented API integrations using RESTful services, ensuring smooth data flow between frontend and backend systems.",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "KZ LEVAGE",
    period: "2024",
    description: [
      "Developed and maintained dynamic, responsive websites using PHP 8, ensuring optimal user experience and performance, and handling client data.",
      "Implemented API integrations using RESTful services, ensuring smooth data flow between frontend and backend systems.",
    ],
  },
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <div className="experience-container" id="experiences" ref={experienceRef}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="experience-title">My Experience</h2>
        <p className="experience-subtitle">My professional journey</p>
      </motion.div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="timeline-dot">
              <div className="dot-inner"></div>
            </div>
            <motion.div
              className="timeline-content"
              whileHover={{ boxShadow: "0 20px 50px rgba(255, 107, 0, 0.3)" }}
            >
              <h3 className="job-title">{exp.title}</h3>
              <span className="company">{exp.company}</span>
              <p className="period">{exp.period}</p>
              <ul className="description-list">
                {exp.description.map((desc, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                  >
                    {desc}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
