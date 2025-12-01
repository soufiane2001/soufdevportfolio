import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import { MdClose, MdArrowBack, MdArrowForward } from "react-icons/md";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt ,FaPhp, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiFirebase, SiClerk ,SiMysql, SiWordpress, SiWix} from "react-icons/si";

// Portfolio Data
const portfolioData = [
  {
    id: 1,
    name: "Ecommerce website",
    description: "Ecommerce website for cash on dilevery",
    image: require("../assets/1.PNG"),
    video: require("../assets/20250919_133552.mp4"),
    demo: "https://bdmstore.store/ecom/index.php",
    repo: "https://github.com/yourusername/portfolio", // ✅ GitHub link
    technologies: ["PHP", "CSS", "MySQL"],
  },
  {
    id: 2,
    name: "Reby Art site web",
    description: "Portfolio for a french painter ",
    image: require("../assets/ChatGPT Image 5 sept. 2025, 12_44_53.png"),
     demo: "https://bdmstore.store/ecom/index.php",
    repo: "https://github.com/soufiane2001/rebyart", // ✅ GitHub link
    technologies: ["React", "JavaScript"],
  },
    {
    id: 3,
    name: "HighUp Counselling & Psychology Services website",
    description: "HighUp Counselling & Psychology Services, we are devoted to providing trauma-informed",
    image: require("../assets/1762903031465.jpg"),
    technologies: ["Wix"],
  },
  {
    id: 4,
    name: "Cash Management App",
    description: "Manage expenses efficiently using React Native and Firebase.",
    image: require("../assets/pr7.JPG"),
    video: require("../assets/pr1.mp4"),
    repo: "https://github.com/soufiane2001/cashappv4", // ✅ GitHub link
    technologies: ["React", "Firebase"],
  },
    {
    id: 5,
    name: "horea-formation.com",
    description: "horea-formation site vitrine",
    image: require("../assets/horea.PNG"),
    demo:'https://www.horea-formation.com/',
    technologies: ["Wordpress"],
  },
];

// Tech icons
const techIcons = {
React: <FaReact className="tech-icon react" />,
  JavaScript: <SiJavascript className="tech-icon js" />,
  Tailwind: <SiTailwindcss className="tech-icon tailwind" />,
  Node: <FaNodeJs className="tech-icon node" />,
  Python: <FaPython className="tech-icon python" />,
  Firebase: <SiFirebase className="tech-icon firebase" />,
  HTML: <FaHtml5 className="tech-icon html" />,
  CSS: <FaCss3Alt className="tech-icon css" />,
  PHP: <FaPhp className="tech-icon php" />,
  MySQL: <SiMysql className="tech-icon mysql" />,
   Wordpress: <SiWordpress className="tech-icon Wordpress" />,
     Wix: <SiWix className="tech-icon Wix" />


};

const Portfolio = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [readyToPlay, setReadyToPlay] = useState(false);
  const startX = useRef(0);

  // Carousel navigation
  const prevSlide = () => {
    setCenterIndex((prev) => (prev === 0 ? portfolioData.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCenterIndex((prev) => (prev === portfolioData.length - 1 ? 0 : prev + 1));
  };

  // Modal functions
  const openVideoModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedVideo(null);
      setReadyToPlay(false);
    }, 300);
  };

  // Play video when modal is open
  useEffect(() => {
    if (isModalOpen && selectedVideo) {
      const timer = setTimeout(() => setReadyToPlay(true), 200);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen, selectedVideo]);

  // Swipe/Drag support
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (endX - startX.current > 50) prevSlide();
    else if (startX.current - endX > 50) nextSlide();
  };
  const handleMouseDown = (e) => {
    startX.current = e.clientX;
    document.onmouseup = handleMouseUp;
    document.onmousemove = handleMouseMove;
  };
  const handleMouseMove = (e) => {};
  const handleMouseUp = (e) => {
    const endX = e.clientX;
    if (endX - startX.current > 50) prevSlide();
    else if (startX.current - endX > 50) nextSlide();
    document.onmouseup = null;
    document.onmousemove = null;
  };

  return (
    <section className="portfolio">
      <h2>My Projects</h2>
      <div
        className="carousel-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >
        <button className="arrow left-arrow" onClick={prevSlide}>
          <MdArrowBack size={30} />
        </button>

        <div className="carousel">
          {portfolioData.map((project, index) => {
            let positionClass = "side";
            if (index === centerIndex) positionClass = "center";
            else if (
              index === (centerIndex - 1 + portfolioData.length) % portfolioData.length
            )
              positionClass = "prev";
            else if (index === (centerIndex + 1) % portfolioData.length)
              positionClass = "next";

            return (
              <div key={project.id} className={`carousel-card ${positionClass}`}>
                <div className="card">
                  <img src={project.image} alt={project.name} />
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
                      <button
                        className="btn play-btn"
                        onClick={() => openVideoModal(project.video)}
                      >
                        🎥 Watch Video
                      </button>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn demo-btn"
                        >
                          🌐 Live Demo
                        </a>
                      )}
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn repo-btn"
                        >
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

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div className={`video-modal ${isModalOpen ? "fade-in" : "fade-out"}`}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              <MdClose size={24} />
            </button>
            <div className="video-container">
              {readyToPlay && (
                <video
                  src={selectedVideo}
                  controls
                  autoPlay
                  width="100%"
                  height="100%"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
