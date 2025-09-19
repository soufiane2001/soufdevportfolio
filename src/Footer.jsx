import React, { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

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
    <footer
      style={{
        background: "linear-gradient(135deg, black, #01053a, #170017)",
        color: "#fff",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "60px 20px 40px",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
    >
      {/* Header / Form Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 50,
        }}
      >
        {/* About / Text */}
        <div style={{ flex: "1 1 300px", maxWidth: 350, textAlign: "center" }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 15, color: "#f39c12" }}>
            Contact Me
          </h2>
          <p style={{ color: "#ccc", fontSize: 15 }}>
            Feel free to send me a message for your projects, questions, or collaborations.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            flex: "1 1 400px",
            maxWidth: 450,
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: 20,
            padding: 25,
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
          }}
        >
          <label style={{ display: "block", marginBottom: 15, fontWeight: 600 }}>
            <FaUser style={{ marginRight: 8 }} />
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              style={{
                width: "100%",
                marginTop: 6,
                padding: 12,
                borderRadius: 10,
                border: errors.name ? "1px solid #e74c3c" : "1px solid #444",
                background: "#1a1a2e",
                color: "#fff",
                outline: "none",
                fontSize: 14,
              }}
            />
            {errors.name && <small style={{ color: "#e74c3c" }}>{errors.name}</small>}
          </label>

          <label style={{ display: "block", marginBottom: 15, fontWeight: 600 }}>
            <FaEnvelope style={{ marginRight: 8 }} />
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              style={{
                width: "100%",
                marginTop: 6,
                padding: 12,
                borderRadius: 10,
                border: errors.email ? "1px solid #e74c3c" : "1px solid #444",
                background: "#1a1a2e",
                color: "#fff",
                outline: "none",
                fontSize: 14,
              }}
            />
            {errors.email && <small style={{ color: "#e74c3c" }}>{errors.email}</small>}
          </label>

          <label style={{ display: "block", marginBottom: 15, fontWeight: 600 }}>
            <FaCommentDots style={{ marginRight: 8 }} />
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={4}
              style={{
                width: "100%",
                marginTop: 6,
                padding: 12,
                borderRadius: 10,
                border: errors.message ? "1px solid #e74c3c" : "1px solid #444",
                background: "#1a1a2e",
                color: "#fff",
                outline: "none",
                fontSize: 14,
                resize: "vertical",
              }}
            />
            {errors.message && <small style={{ color: "#e74c3c" }}>{errors.message}</small>}
          </label>

          <button
            type="submit"
            style={{
              marginTop: 15,
              padding: "12px 25px",
              fontWeight: 700,
              fontSize: 16,
              background: "#f39c12",
              color: "#291c4a",
              border: "none",
              borderRadius: 10,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#fff")}
            onMouseLeave={(e) => (e.target.style.background = "#f39c12")}
          >
            Send
          </button>

          {success && (
            <p
              style={{
                marginTop: 15,
                color: "#2ecc71",
                fontWeight: 600,
                animation: "fadeIn 0.6s ease",
              }}
            >
              ✅ Your message has been successfully sent.
            </p>
          )}
        </form>
      </div>

      {/* Bottom Legal / Confidentiality */}
      <div
        style={{
          marginTop: 40,
          borderTop: "1px solid rgba(255,255,255,0.2)",
          paddingTop: 20,
          textAlign: "center",
          fontSize: 13,
          color: "#aaa",
        }}
      >
        <p>
          © 2025 Soufiane Boutatss. All rights reserved. |{" "}
          <a href="/legal" style={{ color: "#f39c12", textDecoration: "none" }}>
            Legal Notice
          </a>{" "}
          |{" "}
          <a href="/privacy" style={{ color: "#f39c12", textDecoration: "none" }}>
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}
