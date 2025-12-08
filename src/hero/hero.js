import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import './style.css';

// Animated Counter Component
const AnimatedCounter = ({ targetNumber, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = Math.ceil(targetNumber / (duration));
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev + increment >= targetNumber) {
          clearInterval(interval);
          return targetNumber;
        }
        return prev + increment;
      });
    }, 90);

    return () => clearInterval(interval);
  }, [targetNumber, duration]);

  return <h3>{count}+</h3>;
};

// Animated Stars Component
// Reduce star count and optimize
const AnimatedStars = () => {
  const starsRef = useRef();

  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.01; // Slower
      starsRef.current.rotation.x = clock.getElapsedTime() * 0.005;
    }
  });

  return (
    <Stars 
      ref={starsRef}
      radius={100} 
      depth={50} 
      count={3000} // ✅ Reduced from 7000
      factor={4} 
      saturation={0} 
      fade 
      speed={0.5} // ✅ Slower
    />
  );
};


// Main Hero Component
const Hero = () => {
  return (
    <>
      {/* Background Stars Canvas */}
      <div className="starfield-container">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <AnimatedStars />
        </Canvas>
      </div>

      {/* Hero Section - with proper header spacing */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content-wrapper">
            {/* Left Content */}
            <motion.div
              className="hero-text-content"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-greeting"
              >
                Hi there !
              </motion.h1>
              
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hero-name"
              >
                I'm <span className="name-glow">Soufiane Boutatss,</span>
              </motion.h1>

              <motion.div
                className="role-badge-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div
                  className="role-badge"
                  whileHover={{ 
                    scale: 1.02, 
                    rotate: 0,
                    transition: { duration: 0.3 }
                  }}
                >
                  <h2 className="role-text">Web & mobile Developer</h2>
                </motion.div>
              </motion.div>

              <motion.div
                className="cta-buttons"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.button 
                  className="btn-contact"
                  onClick={() => window.location.href = 'mailto:sboutatss@gmail.com'}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact me
                </motion.button>
                
                <motion.button 
                  className="btn-cv"
                  onClick={() => window.location.href = `${process.env.PUBLIC_URL}/Soufianelt.pdf`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download cv
                </motion.button>
              </motion.div>

              <motion.div 
                className="hero-stats"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.div 
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <AnimatedCounter targetNumber={37} duration={10000} />
                  <p>Projects done</p>
                </motion.div>

                <motion.div 
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <AnimatedCounter targetNumber={27} duration={3000} />
                  <p>Happy client</p>
                </motion.div>

                <motion.div 
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <AnimatedCounter targetNumber={4} duration={3000} />
                  <p>Year experience</p>
                </motion.div>
              </motion.div>

              <motion.div 
                className='hero-social'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                <motion.a 
                  href="https://web.facebook.com/soufianski2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook"/>
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/in/soufiane-boutatss-96400a1ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="LinkedIn"/>
                </motion.a>
                
                <motion.a 
                  href="https://github.com/soufiane2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" alt="GitHub"/>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="hero-image-wrapper"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -15, 0]
              }}
              transition={{ 
                opacity: { duration: 1, delay: 0.5 },
                scale: { duration: 1, delay: 0.5 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <div className="image-container">
                <motion.img 
                  src="https://portfoliosoufdev.vercel.app/static/media/so.c04a87ed30752959fd17.png"
                  alt="Soufiane Boutatss"
                  className="profile-image"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
