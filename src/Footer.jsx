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
    
      color: '#fff',
      padding: '40px 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 30,
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
      borderRadius: '10px 10px 0 0',
    },
    legal: {
      flex: '1 1 300px',
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1.5,
    },
    legalLink: {
      color: '#f39c12',
      textDecoration: 'none',
      marginLeft: 10,
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
    legalLinkHover: {
      color: '#fff',
    },
    contact: {
      flex: '1 1 350px',
      maxWidth: 400,
    },
    heading: {
      color: '#f39c12',
      fontSize: 22,
      fontWeight: 700,
      marginBottom: 20,
    },
    label: {
      display: 'block',
      fontSize: 14,
      marginBottom: 10,
      fontWeight: 600,
    },
    input: {
      width: '100%',
      padding: 10,
      borderRadius: 10,
      border: '1px solid #555',
      background: '#1a1a2e',
      color: '#fff',
      fontSize: 14,
      transition: 'border-color 0.3s ease',
      outline: 'none',
      boxSizing: 'border-box',
    },
    inputError: {
      borderColor: '#e74c3c',
    },
    inputFocus: {
      borderColor: '#f39c12',
    },
    errorMsg: {
      color: '#e74c3c',
      fontSize: 12,
      marginTop: 4,
    },
    textarea: {
      width: '100%',
      padding: 10,
      borderRadius: 10,
      border: '1px solid #555',
      background: '#1a1a2e',
      color: '#fff',
      fontSize: 14,
      transition: 'border-color 0.3s ease',
      outline: 'none',
      resize: 'vertical',
      minHeight: 90,
      boxSizing: 'border-box',
    },
    button: {
      marginTop: 15,
      padding: '12px 25px',
      fontWeight: 700,
      fontSize: 16,
      background: '#f39c12',
      color: '#291c4a',
      border: 'none',
      borderRadius: 10,
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
    buttonHover: {
      background: '#fff',
      color: '#291c4a',
    },
  };

  // State to handle focus & hover styles
  const [focus, setFocus] = useState({});
  const [hoverBtn, setHoverBtn] = useState(false);

  const inputStyle = (field) => ({
    ...styles.input,
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
            onFocus={() => setFocus({...focus, name: true})}
            onBlur={() => setFocus({...focus, name: false})}
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
            onFocus={() => setFocus({...focus, email: true})}
            onBlur={() => setFocus({...focus, email: false})}
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
            onFocus={() => setFocus({...focus, message: true})}
            onBlur={() => setFocus({...focus, message: false})}
            style={inputStyle('message')}
            placeholder="Votre message"
            rows={4}
          />
          {errors.message && <small style={styles.errorMsg}>{errors.message}</small>}
        </label>

        <button
          type="submit"
          style={hoverBtn ? {...styles.button, ...styles.buttonHover} : styles.button}
          onMouseEnter={() => setHoverBtn(true)}
          onMouseLeave={() => setHoverBtn(false)}
        >
          Envoyer
        </button>
      </form>
    </footer>
  );
}
