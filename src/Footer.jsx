import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaCommentDots, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Invalid email";
    if (!formData.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccess(false);
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setTimeout(() => setSuccess(false), 4000);
    }
  };

  return (
    <footer className="footer-container" id="contact" ref={footerRef}>
      <div className="footer-content">
        {/* Left Side - Info */}
        <motion.div
          className="footer-info"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="footer-title">Let's Work Together</h2>
          <p className="footer-description">
            Feel free to send me a message for your projects, questions, or collaborations.
            I'm always excited to work on new and challenging projects!
          </p>
          
          <div className="social-links">
            <motion.a
              href="https://github.com/soufiane2001"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/soufiane-boutatss-96400a1ba/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://web.facebook.com/soufianski2001"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="form-group">
            <label>
              <FaUser className="input-icon" />
              Name
            </label>
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={errors.name ? "error" : ""}
              whileFocus={{ scale: 1.02 }}
            />
            {errors.name && <small className="error-msg">{errors.name}</small>}
          </div>

          <div className="form-group">
            <label>
              <FaEnvelope className="input-icon" />
              Email
            </label>
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className={errors.email ? "error" : ""}
              whileFocus={{ scale: 1.02 }}
            />
            {errors.email && <small className="error-msg">{errors.email}</small>}
          </div>

          <div className="form-group">
            <label>
              <FaCommentDots className="input-icon" />
              Message
            </label>
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={4}
              className={errors.message ? "error" : ""}
              whileFocus={{ scale: 1.02 }}
            />
            {errors.message && <small className="error-msg">{errors.message}</small>}
          </div>

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

          {success && (
            <motion.p
              className="success-msg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              ✅ Your message has been successfully sent!
            </motion.p>
          )}
        </motion.form>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p>
          © 2025 Soufiane Boutatss. All rights reserved. |{" "}
          <a href="/legal">Legal Notice</a> | <a href="/privacy">Privacy Policy</a>
        </p>
      </motion.div>
    </footer>
  );
}
