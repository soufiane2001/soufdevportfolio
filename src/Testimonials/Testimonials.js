import './style.css';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import karim from '../assets/karimr.png';
import michel from '../assets/michel.png';
import hinda from '../assets/hinda-removebg-preview.png';
import soukaudio from './AUDIO-2025-02-01-23-23-01.m4a';

const testimonialsData = [
  {
    name: 'Karim Washington',
    role: 'Animator of Programmes',
    email: 'karim1980wash@gmail.com',
    text: "I had the pleasure of working with Soufiane on my website project, and I couldn't be more satisfied with the results. His professionalism, creativity, and technical expertise are outstanding!",
    image: karim,
  },
  {
    name: 'Soukaina',
    role: 'Agent in Call Center',
    email: 'souka1994@gmail.com',
    text: "Outstanding job! The project was finished ahead of schedule, and everything functions perfectly.",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsPB4WeFgOskELDGf66Ky10YNknt0xUUgbQ&s',
    audioUrl: soukaudio,
  },
  {
    name: 'Michel Reby',
    role: 'Painter',
    email: 'michelreby@gmail.com',
    text: "Working with Soufiane on the Reby Art website has been a fantastic experience! He took our artistic vision and brought it to life.",
    image: michel,
  },
  {
    name: 'Hind El hassouni',
    role: 'CEO Agence',
    email: 'elhassounihind39@gmail.com',
    text: "Soufiane did an amazing job building our software. He understood our needs perfectly, delivered on time, and the final product works flawlessly. Highly recommended!",
    image: hinda,
  },
  {
    name: 'Maryam',
    role: 'Student',
    email: 'maryam414.gari@gmail.com',
    text: "Excellent work! The project was completed ahead of schedule, and everything works flawlessly.",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsPB4WeFgOskELDGf66Ky10YNknt0xUUgbQ&s',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const testimonialsRef = useRef(null);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 8000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * itemsPerPage;
    return testimonialsData.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div className="testimonials" id="testimonials" ref={testimonialsRef}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="testimonials-header"
      >
        <h2 className="testimonials-title">✨ What My Customers Say</h2>
        <p className="testimonials-subtitle">Sweet words from my amazing clients 💜</p>
      </motion.div>

      <div className="testimonials-container">
        <AnimatePresence mode="wait">
          {getCurrentTestimonials().map((testimonial, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="quote-icon">❝</div>
              <p className="testimonial-text">{testimonial.text}</p>
              
              <div className="user-info">
                <motion.img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="user-details">
                  <h4>{testimonial.name}</h4>
                  <span className="user-role">{testimonial.role}</span>
                  <p className="testimonial-email">{testimonial.email}</p>
                </div>
              </div>

              {testimonial.audioUrl && (
                <motion.audio 
                  controls 
                  className="custom-audio-player"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <source src={testimonial.audioUrl} type="audio/m4a" />
                  <source src={testimonial.audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </motion.audio>
              )}

              <div className="card-glow"></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.div 
        className="pagination"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
