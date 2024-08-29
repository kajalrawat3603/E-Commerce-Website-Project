import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonText, setButtonText] = useState('Sign Up');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setButtonText('Signing Up...');

    try {
      const response = await fetch('https://e-commerce-website-project.onrender.com/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to sign up');
        setButtonText('Try Again');
      } else {
        setErrorMessage('');
        setButtonText('Signed Up!');
        setEmail(''); 
        setTimeout(() => setButtonText('Sign Up'), 2000);
      }
    } catch (error) {
      console.error('Error during newsletter signup:', error);
      setErrorMessage('An unexpected error occurred');
      setButtonText('Try Again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer>
      <section className="footer">
        <div className="link_box" style={{ flexDirection: 'row' }}>
          <h3 style={{ fontFamily: 'none' }}>
            Get Connected With Us On Social Networks
          </h3>
          <div className="share">
            <a href="#" className="fab fa-facebook"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-google"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>
        <div className="box-container">
          <div className="link_box">
            <h3>Quick Links</h3>
            <a href="/" className="links">Home</a>
            <a href="/#category" className="links">Category</a>
            <a href="/#about" className="links">About</a>
            <a href="/blog" className="links">Blog</a>
            <a href="/contact" className="links">Contact</a>
          </div>
          <div className="link_box">
            <h3>Useful Links</h3>
            <a href="/contact" className="links">Help Centre</a>
            <a href="/contact" className="links">Ask Questions</a>
            <a href="/contact" className="links">Send Feedback</a>
            <a href="#" className="links">Privacy Policy</a>
            <a href="#" className="links">Terms Of Use</a>
          </div>
          <div className="link_box" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3>Contact</h3>
            <a href="#" className="fas fa-home links">DehraDun, India</a>
            <a href="#" className="fas fa-envelope links">kr@gmail.com</a>
            <a href="#" className="fas fa-phone links">+ 99 999 999 99</a>
            <a href="#" className="fas fa-print links">+ 99 999 999 99</a>
          </div>
          <section id="newsletter" className="section-p1">
            <div className="newstext">
              <h4>Sign up for NewsLetters</h4>
              <p>Get E-mail updates on our latest shop and special offers</p>
            </div>
            <form className="forms" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter Your E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" disabled={loading}>{buttonText}</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </section>
        </div>
        <div className="credit">
          Created by <span>Kajal Rawat</span> | All Rights Reserved
        </div>
      </section>
    </footer>
  );
};

export default Footer;
