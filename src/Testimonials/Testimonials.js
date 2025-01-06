
import './style.css'
import karim from '../assets/karimr.png'
import michel from '../assets/michel.png'
import hinda from '../assets/hinda-removebg-preview.png'



import React, { useState ,useEffect} from 'react';



const testimonialsData = [
    {
      name: 'Karim whashington',
      role: 'Animator of programmes',
      text: 'I had the pleasure of working with Soufiane on my website project, and I couldn t be more satisfied with the results. He developed a sleek, modern platform for us, perfectly tailored to our needs. The design is visually stunning and user-friendly, and the functionality has exceeded our expectations. Soufiane s attention to detail, professionalism, and responsiveness throughout the project were exceptional. ',
      image: karim,
    },
    {
      name: 'Michel Reby',
      role: 'Painter',
      text: 'Working with Soufiane on the Reby Art website has been a fantastic experience! He took our artistic vision and brought it to life with a beautiful, responsive design that perfectly showcases our portfolio. The website feels modern, elegant, and is very easy to navigate, which is exactly what we needed to present our work to a broader audience.',
      image: michel,
    },
    {
      name: 'Hind Elhassouni',
      role: 'Ceo of IT Agency',
      text: 'I view setbacks as learning opportunities. When a project doesn’t go as planned, I reflect on what went wrong, whether it was a technical issue or something related to planning. For example, in a recent project, an algorithm I developed didn’t perform as expected in the real world',
      image: hinda,
    },
    {
      name: 'maryam',
      role: 'student',
      text: 'Excellent work! The project was completed ahead of schedule, and everything works flawlessly',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsPB4WeFgOskELDGf66Ky10YNknt0xUUgbQ&s',
    },
  
  ];
  
  const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);
  
    // Auto-pagination effect using setInterval
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
      }, 3000); // Change page every 3 seconds
      return () => clearInterval(interval); // Clear interval on component unmount
    }, [totalPages]);
  
    const getCurrentTestimonials = () => {
      const startIndex = currentIndex * itemsPerPage;
      return testimonialsData.slice(startIndex, startIndex + itemsPerPage);
    };
  
    return (
      <div className="testimonials"  id="testimonials">
        <h2>What My Customer Say About Me</h2>
        <p>
      these are real testiomonials of my clients  i work with 
        </p>
        <div className="testimonials-container">
          {getCurrentTestimonials().map((testimonial, index) => (
            <div key={index} className="testimonial">
              <div className="quote-icon">“</div>
              <p>{testimonial.text}</p>
              <div className="user-info">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
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
