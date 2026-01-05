import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaCommentDots, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => footerRef.current && observer.unobserve(footerRef.current);
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

  // ==== Inline Styles ====
  const styles = {
    footer: {
      background: "none",
      color: "#f0f0f0",
      padding: "3rem 1rem 2rem",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Segoe UI', sans-serif",
    },
    footerContent: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
    },
    footerTitle: {
      fontSize: "1.8rem",
      marginBottom: "1rem",
      color: "#fff",
      position: "relative",
    },
    footerDescription: {
      color: "#ccc",
      lineHeight: "1.8",
      marginBottom: "1.5rem",
    },
    socialLinks: {
      display: "flex",
      gap: "15px",
      marginTop: "1.5rem",
    },
    socialLink: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      background: "rgba(255, 255, 255, 0.1)",
      color: "#fff",
      fontSize: "1.3rem",
      transition: "all 0.3s ease",
    },
    contactForm: {
      background: "rgba(255,255,255,0.05)",
      borderRadius: "15px",
      padding: "30px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      border: "1px solid rgba(52,152,219,0.2)",
      backdropFilter: "blur(10px)",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "15px",
    },
    label: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      color: "#3498db",
      fontWeight: 600,
      marginBottom: "5px",
    },
    input: {
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid rgba(52,152,219,0.3)",
      background: "rgba(255,255,255,0.05)",
      color: "#fff",
      fontSize: "0.95rem",
      outline: "none",
      transition: "all 0.3s ease",
    },
    button: {
      padding: "12px",
      borderRadius: "12px",
      border: "2px solid #3498db",
      background: "#3498db",
      color: "#fff",
      fontWeight: "700",
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginTop: "10px",
    },
    errorMsg: { color: "#e74c3c", fontSize: "0.85rem", marginTop: "5px" },
    successMsg: {
      marginTop: "10px",
      padding: "10px",
      background: "rgba(46,204,113,0.15)",
      color: "#2ecc71",
      fontWeight: 600,
      borderRadius: "8px",
      textAlign: "center",
    },
    footerBottom: {
      fontSize: "0.85rem",
      color: "#95a5a6",
      marginTop: "2rem",
      paddingTop: "1.5rem",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    footerBottomLink: { color: "#d28614ff", textDecoration: "none" },
  };

  return (
    <footer style={styles.footer} ref={footerRef}>
      <div style={styles.footerContent}>
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 style={styles.footerTitle}>Let's Work Together</h2>
          <p style={styles.footerDescription}>
            Feel free to send me a message for your projects, questions, or collaborations. I'm always excited to work on new and challenging projects!
          </p>
          <div style={styles.socialLinks}>
            {[{icon: FaGithub, link:"https://github.com/soufiane2001"}, {icon: FaLinkedin, link:"https://www.linkedin.com/in/soufiane-boutatss-96400a1ba/"}, {icon: FaFacebook, link:"https://web.facebook.com/soufianski2001"}].map((s, i) => (
              <motion.a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                style={styles.socialLink}
              >
                <s.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={styles.contactForm}
        >
          {["name","email","message"].map((field) => (
            <div style={styles.formGroup} key={field}>
              <label style={styles.label}>
                {field === "name" && <FaUser />}
                {field === "email" && <FaEnvelope />}
                {field === "message" && <FaCommentDots />}
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {field === "message" ? (
                <motion.textarea
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  rows={4}
                  placeholder={`Your ${field}`}
                  style={styles.input}
                  whileFocus={{ scale: 1.02 }}
                />
              ) : (
                <motion.input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Your ${field}`}
                  style={styles.input}
                  whileFocus={{ scale: 1.02 }}
                />
              )}
              {errors[field] && <small style={styles.errorMsg}>{errors[field]}</small>}
            </div>
          ))}

          <motion.button type="submit" style={styles.button} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Send Message
          </motion.button>

          {success && <motion.p style={styles.successMsg}>✅ Your message has been successfully sent!</motion.p>}
        </motion.form>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={styles.footerBottom}
      >
        <p>
          © 2025 Soufiane Boutatss. All rights reserved. |{" "}
          <a href="/legal" style={styles.footerBottomLink}>Legal Notice</a> |{" "}
          <a href="/privacy" style={styles.footerBottomLink}>Privacy Policy</a>
        </p>
      </motion.div>
    </footer>
  );
}
