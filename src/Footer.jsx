import React, { useState } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Nom est requis';
    if (!formData.email.trim()) errs.email = 'Email est requis';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Email invalide';
    if (!formData.message.trim()) errs.message = 'Message est requis';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Merci, ${formData.name}! Votre message a bien été reçu.`);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  const styles = {
    footer: {
      backgroundColor: '#121212',
      color: '#eee',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: 24,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 24,
    },
    legal: {
      flex: '1 1 300px',
      fontSize: 14,
      lineHeight: 1.5,
    },
    legalLink: {
      color: '#f0a500',
      textDecoration: 'none',
      marginLeft: 12,
      cursor: 'pointer',
    },
    contact: {
      flex: '1 1 350px',
      maxWidth: 400,
    },
    heading: {
      fontSize: 18,
      fontWeight: 600,
      marginBottom: 16,
      color: '#f0a500',
    },
    label: {
      display: 'block',
      marginBottom: 12,
      fontSize: 14,
    },
    input: {
      width: '100%',
      padding: 10,
      borderRadius: 5,
      border: '1px solid #333',
      backgroundColor: '#1a1a1a',
      color: '#eee',
      fontSize: 14,
      outline: 'none',
      transition: 'border-color 0.3s',
    },
    inputError: {
      borderColor: '#e74c3c',
    },
    inputFocus: {
      borderColor: '#f0a500',
    },
    errorMsg: {
      color: '#e74c3c',
      fontSize: 12,
      marginTop: 4,
    },
    textarea: {
      width: '100%',
      padding: 10,
      borderRadius: 5,
      border: '1px solid #333',
      backgroundColor: '#1a1a1a',
      color: '#eee',
      fontSize: 14,
      outline: 'none',
      transition: 'border-color 0.3s',
      resize: 'vertical',
      minHeight: 90,
    },
    button: {
      backgroundColor: '#f0a500',
      border: 'none',
      borderRadius: 5,
      padding: '12px 24px',
      color: '#121212',
      fontWeight: 'bold',
      fontSize: 16,
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      marginTop: 8,
    },
  };

  // Handle focus style on inputs (optional enhancement)
  const [focus, setFocus] = useState({});

  const onFocus = (field) => setFocus({ ...focus, [field]: true });
  const onBlur = (field) => setFocus({ ...focus, [field]: false });

  const inputStyle = (field) => ({
    ...styles.input,
    ...(errors[field] ? styles.inputError : {}),
    ...(focus[field] ? styles.inputFocus : {}),
  });

  const textareaStyle = (field) => ({
    ...styles.textarea,
    ...(errors[field] ? styles.inputError : {}),
    ...(focus[field] ? styles.inputFocus : {}),
  });

  return (
    <footer style={styles.footer}>
      <div style={styles.legal}>
        <p>© 2025 Soufiane Boutatss. Tous droits réservés.</p>
        <p>
          <a href="/legal" style={styles.legalLink}>Mentions Légales</a> |{' '}
          <a href="/privacy" style={styles.legalLink}>Politique de Confidentialité</a>
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
            onFocus={() => onFocus('name')}
            onBlur={() => onBlur('name')}
            style={inputStyle('name')}
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
            onFocus={() => onFocus('email')}
            onBlur={() => onBlur('email')}
            style={inputStyle('email')}
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
            onFocus={() => onFocus('message')}
            onBlur={() => onBlur('message')}
            style={textareaStyle('message')}
            placeholder="Votre message"
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
