import React, { useEffect, useState } from 'react';
import './style.css';
import pr1 from '../assets/pr1.JPG';
import pr6 from '../assets/pr6.png';
import pr7 from '../assets/pr7.JPG';
import pr8 from '../assets/pr8.JPG';
import pr4 from '../assets/pr4.JPG';
import pr3 from '../assets/pr3.JPG';
import { MdClose } from 'react-icons/md';

const portfolioData = [
  {
    title: 'soufianeMarketplace',
    image: pr1,
    link: 'https://youtu.be/tq9h_W0ZTQc?si=Nr9cC9gJummgs3-3',
  },
  {
    title: 'Horoslove dating app',
    image: pr6,
    link: 'https://youtube.com/shorts/qYWI6MkadZk?feature=share',
  },
  {
    title: '"ساعة مع الحمرا',
    image: pr3,
    link: 'https://youtu.be/HBFPssMi82Q?si=eI5bEszvoHjNgpC-',
  },
  {
    title: 'Cash management app',
    image: pr7,
    link: 'https://youtu.be/F3Pjh49qdzE?si=ePMNf5A0thlc-QF0',
  },
  {
    title: 'Site Web ZO Équestre',
    image: pr4,
    link: 'https://youtu.be/Mu9REuAFB0s?si=p86POgNHuPYxTf_b',
  },
  {
    title: 'Rebyart portfolio',
    image: pr4,
    link: 'https://youtu.be/RTqaLIWhK0U?si=BJzK3ApG5L34T0b3',
  },
  {
    title: 'ajinkriw',
    image: pr4,
    link: 'https://youtu.be/UVQUKwiEO0Q?si=eTpM-Diq_e9zO92l',
  },
  {
    title: 'ecommerce cash on delivery',
    image: pr8,
    link: 'https://youtu.be/gj7IWaDnEXI?si=oyTYeQvaS2uWrNmL',
  }
];

const convertToEmbedUrl = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = (match && match[2].length === 11) ? match[2] : null;
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
};

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const itemsPerPage = 4;
  const totalPages = Math.ceil(portfolioData.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 14000);
    
    return () => clearInterval(interval);
  }, [totalPages]);

  const getCurrentPortfolio = () => {
    const startIndex = currentIndex * itemsPerPage;
    return portfolioData.slice(startIndex, startIndex + itemsPerPage);
  };

  const handleVideoOpen = (link) => {
    const embedUrl = convertToEmbedUrl(link);
    if (embedUrl) {
      setSelectedVideo(embedUrl);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <p>This is a sample of my projects done. You can watch details</p>

      <div className="portfolio-container">
        {getCurrentPortfolio().map((item, index) => (
          <div className="portfolio-item" key={index}>
            <div className="cadre">
              <img src={item.image} alt={item.title} />
              <div className="portfolio-info">
                <h3>{item.title}</h3>
                <a 
                  className="view-details"
                  onClick={(e) => {
                    e.preventDefault();
                    handleVideoOpen(item.link);
                  }}
                >
                  View Details
                </a>
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
          />
        ))}
      </div>

      {isModalOpen && selectedVideo && (
        <div className="video-modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              <MdClose size={24} />
            </button>
            <div className="video-container">
              <iframe
                src={selectedVideo}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
