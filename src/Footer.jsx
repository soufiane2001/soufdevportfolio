import React, { useState } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Email is invalid';
    if (!formData.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Thanks, ${formData.name}! Your message has been received.`);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  const styles = {
    footer: {
      backgroundColor: '#222',
      color: '#eee',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: '2rem',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    legal: {
      flex: '1 1 300px',
      marginBottom: '1rem',
    },
    legalP: {
      margin: '0.3rem 0',
      fontSize: '0.9rem',
    },
    legalLink: {
      color: '#aad8d3',
      textDecoration: 'none',
      margin: '0 0.5rem',
      cursor: 'pointer',
    },
    contact: {
      flex: '1 1 300px',
      maxWidth: '400px',
    },
    heading: {
      marginBottom: '1rem',
      fontWeight: 600,
    },
    label: {
      display: 'block',
      marginBottom: '1rem',
      fontSize: '0.95rem',
    },
    input: {
      width: '100%',
      padding: '0.5rem',
      border: '1px solid #555',
      borderRadius: '4px',
      backgroundColor: '#333',
      color: '#eee',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
    },
    inputError: {
      borderColor: '#e74c3c',
    },
    errorMsg: {
      color: '#e74c3c',
      fontSize: '0.8rem',
      marginTop: '0.2rem',
      display: 'block',
    },
    textarea: {
      width: '100%',
      padding: '0.5rem',
      border: '1px solid #555',
      borderRadius: '4px',
      backgroundColor: '#333',
      color: '#eee',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
      resize: 'vertical',
    },
    button: {
      backgroundColor: '#f0a500',
      border: 'none',
      padding: '0.7rem 1.2rem',
      fontSize: '1rem',
      fontWeight: 600,
      color: '#222',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.legal}>
        <p style={styles.legalP}>© 2025 Soufiane Boutatss. All rights reserved.</p>
        <p style={styles.legalP}>
          <a href="/legal" style={styles.legalLink}>Legal Mentions</a> |{' '}
          <a href="/privacy" style={styles.legalLink}>Privacy Policy</a>
        </p>
      </div>

      <form style={styles.contact} onSubmit={handleSubmit} noValidate>
        <h3 style={styles.heading}>Contactez-moi</h3>

        <label style={styles.label}>
          Nom
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ 
              ...styles.input, 
              ...(errors.name ? styles.inputError : {}) 
            }}
            placeholder="Votre nom"
          />
          {errors.name && <small style={styles.errorMsg}>{errors.name}</small>}
        </label>

        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ 
              ...styles.input, 
              ...(errors.email ? styles.inputError : {}) 
            }}
            placeholder="votre.email@example.com"
          />
          {errors.email && <small style={styles.errorMsg}>{errors.email}</small>}
        </label>

        <label style={styles.label}>
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ 
              ...styles.textarea, 
              ...(errors.message ? styles.inputError : {}) 
            }}
            placeholder="Votre message"
            rows="4"
          />
          {errors.message && <small style={styles.errorMsg}>{errors.message}</small>}
        </label>

        <button
          type="submit"
          style={styles.button}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = '#cf8500')}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = '#f0a500')}
        >
          Envoyer
        </button>
      </form>
    </footer>
  );
}
