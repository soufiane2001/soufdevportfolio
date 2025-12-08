import React, { useState, useRef } from "react";
import "./style.css";
import { MdClose, MdArrowBack, MdArrowForward } from "react-icons/md";
import { FaReact, FaPhp } from "react-icons/fa";
import { SiJavascript, SiFirebase, SiMysql, SiWordpress, SiWix } from "react-icons/si";

const portfolioData = [
  {
    id: 1,
    name: "Ecommerce website",
    description: "Ecommerce website for cash on delivery",
    image: require("../assets/1.PNG"),
    video: require("../assets/20250919_133552.mp4"),
    demo: "https://bdmstore.store/ecom/index.php",
    repo: "https://github.com/yourusername/portfolio",
    technologies: ["PHP", "CSS", "MySQL"],
  },
  {
    id: 2,
    name: "Reby Art site web",
    description: "Portfolio for a french painter",
    image: require("../assets/ChatGPT Image 5 sept. 2025, 12_44_53.png"),
    demo: "https://rebyart.vercel.app/",
    repo: "https://github.com/soufiane2001/rebyart",
    technologies: ["React", "JavaScript"],
  },
  {
    id: 3,
    name: "HighUp Counselling",
    description: "Psychology Services website",
    image: require("../assets/1762903031465.jpg"),
    demo: 'https://www.highupcounselling.ca/',
    technologies: ["Wix"],
  },
  {
    id: 4,
    name: "Cash Management App",
    description: "Manage expenses with React Native",
    image: require("../assets/pr7.JPG"),
    repo: "https://github.com/soufiane2001/cashappv4",
     video: require("../assets/pr1.mp4"),
    technologies: ["React", "Firebase"],
  },
  {
    id: 5,
    name: "Patient Management",
    description: "Manage patients and appointments",
    image: require("../assets/120248.png"),
    video: require("../assets/20251204_110450.mp4"),
    technologies: ["Electronjs"],
  },
  {
    id: 6,
    name: "horea-formation.com",
    description: "Training center website",
    image: require("../assets/horea.PNG"),
    demo: 'https://www.horea-formation.com/',
    technologies: ["Wordpress"],
  },
];

const techIcons = {
  React: <FaReact className="tech-icon" />,
  JavaScript: <SiJavascript className="tech-icon" />,
  Firebase: <SiFirebase className="tech-icon" />,
  PHP: <FaPhp className="tech-icon" />,
  MySQL: <SiMysql className="tech-icon" />,
  Wordpress: <SiWordpress className="tech-icon" />,
  Wix: <SiWix className="tech-icon" />,
  Electronjs: <FaReact className="tech-icon" />,
  CSS: "CSS"
};

const Portfolio = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const startX = useRef(0);

  const prevSlide = () => {
    setCenterIndex((prev) => (prev === 0 ? portfolioData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCenterIndex((prev) => (prev === portfolioData.length - 1 ? 0 : prev + 1));
  };

  const openVideoModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedVideo(null), 300);
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (endX - startX.current > 50) prevSlide();
    else if (startX.current - endX > 50) nextSlide();
  };

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio-title">My Projects</h2>

      <div
        className="carousel-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button className="arrow left-arrow" onClick={prevSlide}>
          <MdArrowBack size={30} />
        </button>

        <div className="carousel">
          {portfolioData.map((project, index) => {
            let positionClass = "side";
            if (index === centerIndex) positionClass = "center";
            else if (index === (centerIndex - 1 + portfolioData.length) % portfolioData.length)
              positionClass = "prev";
            else if (index === (centerIndex + 1) % portfolioData.length)
              positionClass = "next";

            return (
              <div key={project.id} className={`carousel-card ${positionClass}`}>
                <div className="card">
                  <img src={project.image} alt={project.name} loading="lazy" />
                  <div className="card-content">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="tech-stack">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-badge">
                          {techIcons[tech] || tech}
                        </span>
                      ))}
                    </div>
                    <div className="actions">
                      {project.video && (
                        <button className="btn play-btn" onClick={() => openVideoModal(project.video)}>
                          🎥 Video
                        </button>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn demo-btn">
                          🌐 Demo
                        </a>
                      )}
                      {project.repo && (
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn repo-btn">
                          💻 GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button className="arrow right-arrow" onClick={nextSlide}>
          <MdArrowForward size={30} />
        </button>
      </div>

      {isModalOpen && selectedVideo && (
        <div className="video-modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              <MdClose size={24} />
            </button>
            <div className="video-container">
              <video src={selectedVideo} controls autoPlay width="100%" height="100%" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
