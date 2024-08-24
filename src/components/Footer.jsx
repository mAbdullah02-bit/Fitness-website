import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleSendMessage = () => {
    if (name && email) {
      console.log(`Message sent from ${name} (${email})`);
      setMessageSent(true);
      setName('');
      setEmail('');
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.leftSection}>
          <Link style={styles.logoSection} to='home'>
            <img src="/images/logo.png" alt="Logo" style={styles.logoImage} />
          </Link>

          <div style={styles.infoSection}>
            <p style={styles.infoText}>
              Join our fitness community to stay up-to-date with the latest workouts, health tips, and more. 
              We’re here to help you achieve your fitness goals!
            </p>
          </div>

          <div style={styles.socialSection}>
            <a href="https://www.facebook.com" style={styles.socialIcon} aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" style={styles.socialIcon} aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" style={styles.socialIcon} aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" style={styles.socialIcon} aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div style={styles.rightSection}>
          <h3 style={styles.messageHeader}>Send Us a Message</h3>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Your Message"
            style={styles.input}
          />
          <button onClick={handleSendMessage} style={styles.sendButton}>Send</button>
          {messageSent && <p style={styles.thankYouMessage}>Thank you for your message!</p>}
        </div>
      </div>
      <div style={styles.fullWidthContainer}>
        <div style={styles.copyright}>
          &copy; {new Date().getFullYear()} FitnessDome. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    padding: '20px 0',
    fontSize: '14px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    gap: '20px',
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '20px',
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '10px',
  },
  logoSection: {
    marginBottom: '10px',
  },
  logoImage: {
    width: '100px',
  },
  infoSection: {
    marginBottom: '10px',
  },
  infoText: {
    fontSize: '14px',
  },
  socialSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  socialIcon: {
    color: '#ffffff',
    fontSize: '18px',
    transition: 'color 0.3s ease',
    textDecoration: 'none',
  },
  socialIconHover: {
    color: '#ff6600',
  },
  messageHeader: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    maxWidth: '300px',
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ffffff',
    borderRadius: '5px',
    backgroundColor: '#333333',
    color: '#ffffff',
    fontSize: '14px',
  },
  sendButton: {
    backgroundColor: '#ff6600',
    color: '#ffffff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
    marginTop: '10px',
  },
  sendButtonHover: {
    backgroundColor: '#cc5200',
  },
  thankYouMessage: {
    marginTop: '10px',
    fontSize: '12px',
    color: '#00cc00',
  },
  fullWidthContainer: {
    backgroundColor: '#2a2a2a',
    padding: '10px 0',
    width: '100%',
    marginTop: '20px',
  },
  copyright: {
    fontSize: '12px',
    textAlign: 'center',
    color: '#ffffff',
  },
  '@media (max-width: 640px)': {
    footer: {
      fontSize: '12px',
    },
    logoImage: {
      width: '80px',
    },
    infoText: {
      fontSize: '12px',
    },
    socialIcon: {
      fontSize: '16px',
    },
    messageHeader: {
      fontSize: '14px',
    },
    input: {
      maxWidth: '100%',
    },
    sendButton: {
      fontSize: '12px',
      padding: '8px 16px',
    },
    thankYouMessage: {
      fontSize: '10px',
    },
    copyright: {
      fontSize: '10px',
    },
  },
};

export default Footer;
