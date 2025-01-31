import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Contact.css';

const Contact = () => {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login"); // Redirects to the login page
  };

  const getRatingMessage = (rating) => {
    if (rating === 0) return "";
    if (rating === 1) return "Very Poor 😞";
    if (rating === 2) return "Poor 😕";
    if (rating === 3) return "Average 😐";
    if (rating === 4) return "Good 🙂";
    if (rating === 5) return "Excellent 😁";
  };

  return (

    <div >
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      
      <div className="profile-container">
       <a href="https://mythili2006.github.io/New-Portfolio/portfolio.html"><img src="mythili\ wix1.jpg" className="profile-pic"  /></a>
        <h3>Mythili</h3>
      </div>
      <br></br><br></br>

      <div className="rating-section">
        <h3>Rate this Blog</h3>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <i
              key={star}
              className={`fa-star ${star <= rating ? "fas" : "far"}`}
              onClick={() => setRating(star)}
            ></i>
          ))}
        </div>
        {rating > 0 && <p className="rating-message">{getRatingMessage(rating)}</p>}
      </div>
      <br></br><br></br>

      <footer className="footer">
        <div className="footer-social-media">
          <div className="footer-social-links">
            <a href="https://www.facebook.com" className="social-icon" aria-label="Facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://youtube.com" className="social-icon" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com" className="social-icon" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.twitter.com" className="social-icon" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://github.com/mythili2006" className="social-icon" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://wa.me/919123533931" className="social-icon" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="mailto:mythilipalanisamy999@gmail.com" className="social-icon" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
        <br></br><br></br>
        <div className="footer-bar">
            <br></br>
          <p className="footer-copy">
            <marquee>Copyright &copy; 2025; Designed by <b>Mythili</b></marquee>
          </p>
          <br></br>
        </div>
      </footer>

      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Contact;
