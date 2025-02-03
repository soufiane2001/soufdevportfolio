import React,{useEffect,useState} from 'react'
import './style.css'


import pr1 from '../assets/pr1.JPG'
import pr6 from '../assets/pr6.png'
import pr7 from '../assets/pr7.JPG'
import pr8 from '../assets/pr8.JPG'
import pr4 from '../assets/pr4.JPG'
import pr3 from '../assets/pr3.JPG'

import { RiPriceTag2Line } from 'react-icons/ri'




const portfolioData = [
  {
    title: 'soufianeMarketplace',
    image: pr1, // Replace with actual image URL
    link: 'https://youtu.be/tq9h_W0ZTQc?si=Nr9cC9gJummgs3-3',
  },
  {
    title: 'Horoslove dating app ',
    image:pr6, // Replace with actual image URL
    link: 'https://youtube.com/shorts/qYWI6MkadZk?feature=share',
  }, {
    title: '"ساعة مع الحمرا',
    image:pr3, // Replace with actual image URL
    link: 'https://youtu.be/HBFPssMi82Q?si=eI5bEszvoHjNgpC-',
  },
  {
    title: 'Cash management app',
    image: pr7, // Replace with actual image URL
    link: 'https://youtu.be/F3Pjh49qdzE?si=ePMNf5A0thlc-QF0',
  }, {
    title: 'Rebyart portfolio',
    image:pr4, // Replace with actual image URL
    link: 'https://youtu.be/RTqaLIWhK0U?si=BJzK3ApG5L34T0b3',
  },
  {
    title: 'ecommerce cash on delivery',
    image: pr8, // Replace with actual image URL
    link: 'https://youtu.be/gj7IWaDnEXI?si=oyTYeQvaS2uWrNmL',
  },
 
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(portfolioData.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 14000); // Change page every 4 seconds
    return () => clearInterval(interval);
  }, [totalPages]);

  const getCurrentPortfolio = () => {
    const startIndex = currentIndex * itemsPerPage;
    return portfolioData.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <p>
       this is a sample of my porojects done you can watch details 
       </p>
      <div className="portfolio-container">
        {getCurrentPortfolio().map((item, index) => (
          <div key={index} className="portfolio-item">
          <div className="cadre">
            <img src={item.image} alt={item.title} />
            </div>
            <div className="portfolio-info">
              <h3>{item.title}</h3>
              <a href={item.link} className="view-details">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination"   >
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






export default Portfolio
