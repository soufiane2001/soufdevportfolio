import './style.css';
import karim from '../assets/karimr.png';
import michel from '../assets/michel.png';
import hinda from '../assets/hinda-removebg-preview.png';
import React, { useState, useEffect } from 'react';
import soukaudio from './AUDIO-2025-02-01-23-23-01.m4a';

const testimonialsData = [
  {
    name: 'Karim Washington',
    role: 'Animator of Programmes',
    email: 'karim1980wash@gmail.com',
    text: "I had the pleasure of working with Soufiane on my website project, and I couldn't be more satisfied with the results...",
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
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 20000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * itemsPerPage;
    return testimonialsData.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div className="testimonials" id="testimonials">
      <h2>✨ What My Customers Say</h2>
      <p>Sweet words from my amazing clients 💜</p>
      <div className="testimonials-container">
        {getCurrentTestimonials().map((testimonial, index) => (
          <div key={index} className="testimonial">
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="user-info">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
                <p className="testimonial-email">{testimonial.email}</p>
              </div>
            </div>
            {testimonial.audioUrl && (
              <audio controls className="custom-audio-player">
                <source src={testimonial.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
