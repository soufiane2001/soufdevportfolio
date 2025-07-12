import React from 'react';

const CustomFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="portfolio-app">
      <main className="portfolio-content">
        <div className="portfolio-card">
          <h1 className="portfolio-title">Portfolio Footer Preview</h1>
          <p className="portfolio-description">
            This preview shows the custom footer component with unique CSS classes.
            Scroll down to see the footer implementation.
          </p>
        </div>
      </main>
      
      <footer className="portfolio-footer">
        <div className="footer-container">
          {/* Contact Section */}
          <div className="footer-contact-section">
            <h3 className="footer-contact-title">
              Connect With Me
            </h3>
            <div className="footer-contact-links">
              <a 
                href="mailto:contact@soufianeboutatssdev.com" 
                className="footer-email-link"
                aria-label="Email"
              >
                <span className="footer-email-icon">✉️</span>
                <span className="footer-email-text">contact@soufianeboutatssdev.com</span>
              </a>
              
              <div className="footer-social-links">
                <a 
                  href="https://github.com/soufianeboutat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="GitHub"
                >
                  <span className="footer-social-icon">🐱</span>
                </a>
                <a 
                  href="https://linkedin.com/in/soufianeboutat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="LinkedIn"
                >
                  <span className="footer-social-icon">👔</span>
                </a>
                <a 
                  href="https://twitter.com/soufianeboutat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Twitter"
                >
                  <span className="footer-social-icon">🐦</span>
                </a>
              </div>
            </div>
          </div>

          {/* License and Copyright */}
          <div className="footer-legal-section">
            <div className="footer-copyright">
              <p className="footer-copyright-text">© {currentYear} Soufiane Boutats. All Rights Reserved.</p>
              <p className="footer-license-text">Code licensed under MIT License. Content owned by Soufiane Boutats.</p>
            </div>
            
            <div className="footer-built-with">
              <p className="footer-built-text">Crafted with React & Custom CSS</p>
            </div>
          </div>
        </div>
      </footer>
      
      <style jsx>{`
        .portfolio-app {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1f2d, #0d1117);
          color: #e6edf3;
          font-family: 'Segoe UI', 'Roboto', sans-serif;
        }
        
        .portfolio-content {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }
        
        .portfolio-card {
          background: rgba(22, 27, 34, 0.8);
          border-radius: 16px;
          padding: 3rem;
          max-width: 800px;
          width: 100%;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(240, 246, 252, 0.1);
          backdrop-filter: blur(10px);
        }
        
        .portfolio-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          background: linear-gradient(90deg, #58a6ff, #2ea043);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }
        
        .portfolio-description {
          font-size: 1.2rem;
          color: #8b949e;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }
        
        /* Unique Footer Styles */
        .portfolio-footer {
          background: linear-gradient(to right, #0d1117, #161b22);
          color: #c9d1d9;
          padding: 3rem 1.5rem 1.5rem;
          border-top: 1px solid rgba(240, 246, 252, 0.1);
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        /* Contact Section */
        .footer-contact-section {
          margin-bottom: 2.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(240, 246, 252, 0.1);
        }
        
        .footer-contact-title {
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 1.8rem;
          color: #58a6ff;
          position: relative;
          display: inline-block;
        }
        
        .footer-contact-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60%;
          height: 3px;
          background: linear-gradient(to right, #58a6ff, #2ea043);
          border-radius: 3px;
        }
        
        .footer-contact-links {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          align-items: center;
        }
        
        .footer-email-link {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: #c9d1d9;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 0.8rem 1.2rem;
          border-radius: 8px;
          background: rgba(33, 38, 45, 0.5);
        }
        
        .footer-email-link:hover {
          background: rgba(48, 54, 61, 0.7);
          transform: translateY(-3px);
          color: #58a6ff;
          box-shadow: 0 5px 15px rgba(88, 166, 255, 0.1);
        }
        
        .footer-email-icon {
          font-size: 1.5rem;
        }
        
        .footer-email-text {
          font-size: 1.1rem;
          font-weight: 500;
        }
        
        .footer-social-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .footer-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(33, 38, 45, 0.5);
          color: #c9d1d9;
          transition: all 0.3s ease;
          font-size: 1.5rem;
          text-decoration: none;
        }
        
        .footer-social-link:hover {
          transform: translateY(-5px) scale(1.1);
          background: linear-gradient(135deg, #1f6feb, #2ea043);
          box-shadow: 0 5px 20px rgba(31, 111, 235, 0.3);
          color: white;
        }
        
        /* Legal Section */
        .footer-legal-section {
          padding-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .footer-copyright {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .footer-copyright-text {
          font-size: 0.95rem;
          color: #8b949e;
        }
        
        .footer-license-text {
          font-size: 0.85rem;
          color: #6e7681;
        }
        
        .footer-built-with {
          font-size: 0.95rem;
          color: #8b949e;
          text-align: right;
        }
        
        .footer-built-text {
          padding: 0.5rem 1rem;
          background: rgba(33, 38, 45, 0.5);
          border-radius: 6px;
          display: inline-block;
        }
        
        /* Responsive Design */
        @media (min-width: 768px) {
          .footer-legal-section {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          
          .footer-contact-links {
            justify-content: space-between;
          }
        }
        
        @media (max-width: 767px) {
          .footer-contact-links {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
          
          .footer-email-link {
            width: 100%;
          }
          
          .footer-built-with {
            text-align: left;
          }
          
          .portfolio-card {
            padding: 2rem 1.5rem;
          }
          
          .portfolio-title {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 480px) {
          .portfolio-title {
            font-size: 1.8rem;
          }
          
          .footer-email-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CustomFooter;
