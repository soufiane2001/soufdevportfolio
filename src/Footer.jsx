import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="app">
      <div className="content">
        <header>
          <div className="logo">
            <FaGithub className="icon" />
          </div>
          <h1>Soufiane Boutats</h1>
          <p className="subtitle">Full Stack Developer & UI/UX Designer</p>
        </header>
        
        <div className="card-container">
          <div className="card">
            <h2><FaGithub className="card-icon" /> Development Skills</h2>
            <p>I create responsive, high-performance web applications using modern technologies.</p>
            <div className="tech-stack">
              <span className="tech">React</span>
              <span className="tech">Node.js</span>
              <span className="tech">Express</span>
              <span className="tech">MongoDB</span>
            </div>
          </div>
          
          <div className="card">
            <h2><FaGithub className="card-icon" /> Design Skills</h2>
            <p>I design beautiful, intuitive user interfaces with a focus on user experience.</p>
            <div className="tech-stack">
              <span className="tech">Figma</span>
              <span className="tech">UI/UX</span>
              <span className="tech">Tailwind CSS</span>
              <span className="tech">Responsive Design</span>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-container">
          {/* Contact Section */}
          <div className="contact-section">
            <h3 className="footer-heading">
              Get in Touch
            </h3>
            <div className="contact-links">
              <a 
                href="mailto:contact@soufianeboutatssdev.com" 
                className="email-link"
                aria-label="Email"
              >
                <FaEnvelope className="email-icon" />
                <span>contact@soufianeboutatssdev.com</span>
              </a>
              
              <div className="social-links">
                <a 
                  href="https://github.com/soufianeboutat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <FaGithub className="social-icon" />
                </a>
                <a 
                  href="https://linkedin.com/in/soufianeboutat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="social-icon" />
                </a>
                <a 
                  href="https://twitter.com/soufianeboutat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Twitter"
                >
                  <FaTwitter className="social-icon" />
                </a>
              </div>
            </div>
          </div>

          {/* License and Copyright */}
          <div className="license-section">
            <div className="copyright">
              <p>© {currentYear} Soufiane Boutats. All Rights Reserved.</p>
              <p className="license-info">Code licensed under MIT License. Content owned by Soufiane Boutats.</p>
            </div>
            
            <div className="built-with">
              <p>Designed and built with React & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
      
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .app {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: linear-gradient(135deg, #1a202c, #2d3748);
          color: #e2e8f0;
        }
        
        .content {
          flex: 1;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 2rem;
        }
        
        header {
          text-align: center;
          padding: 40px 20px;
          margin-bottom: 20px;
        }
        
        .logo {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 80px;
          height: 80px;
          background: rgba(11, 197, 234, 0.1);
          border-radius: 50%;
          margin-bottom: 20px;
        }
        
        .logo .icon {
          font-size: 2.5rem;
          color: #0bc5ea;
        }
        
        h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          background: linear-gradient(90deg, #0bc5ea, #00c3ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .subtitle {
          font-size: 1.2rem;
          color: #a0aec0;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }
        
        .card {
          background: rgba(26, 32, 44, 0.7);
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(74, 85, 104, 0.3);
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
        }
        
        .card h2 {
          color: #0bc5ea;
          margin-bottom: 20px;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .card-icon {
          font-size: 1.3rem;
        }
        
        .card p {
          color: #cbd5e0;
          margin-bottom: 15px;
          line-height: 1.6;
        }
        
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }
        
        .tech {
          background: rgba(11, 197, 234, 0.15);
          color: #0bc5ea;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
        }
        
        /* Footer Styles */
        .footer {
          background: #1a202c;
          color: #e2e8f0;
          padding: 3rem 1rem 1.5rem;
          border-top: 1px solid rgba(74, 85, 104, 0.5);
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        /* Contact Section */
        .contact-section {
          margin-bottom: 2rem;
        }
        
        .footer-heading {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          display: inline-block;
          border-bottom: 2px solid #0bc5ea;
        }
        
        .contact-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          align-items: center;
        }
        
        .email-link {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          color: #e2e8f0;
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 1.1rem;
        }
        
        .email-link:hover {
          color: #0bc5ea;
        }
        
        .email-icon {
          font-size: 1.3rem;
        }
        
        .social-links {
          display: flex;
          gap: 1.2rem;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: #e2e8f0;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background: #0bc5ea;
          transform: translateY(-3px);
        }
        
        .social-icon {
          font-size: 1.3rem;
        }
        
        /* License and Copyright */
        .license-section {
          border-top: 1px solid rgba(74, 85, 104, 0.5);
          padding-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .copyright {
          font-size: 0.9rem;
          color: #a0aec0;
        }
        
        .license-info {
          font-size: 0.85rem;
          color: #718096;
          margin-top: 0.4rem;
        }
        
        .built-with {
          font-size: 0.9rem;
          color: #a0aec0;
        }
        
        /* Responsive Design */
        @media (min-width: 768px) {
          .license-section {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
        
        @media (max-width: 768px) {
          .contact-links {
            flex-direction: column;
            align-items: flex-start;
          }
          
          h1 {
            font-size: 2rem;
          }
          
          .subtitle {
            font-size: 1rem;
          }
          
          .card {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
