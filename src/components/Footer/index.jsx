import React from 'react'
import logo from 'images/logo.svg'
import phone from 'images/icon-phone.svg'
import email from 'images/icon-email.svg'
import location from 'images/icon-location.svg'
import './style.scss'

function Footer() {
  return (
    <footer className="Footer">
      <img src={logo} alt="logo" className="logo" />
      <div className="footer-main-nav">
        <div className="address">
          <img src={location} alt="location" className="location-icon" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div className="phone-email-sect">
          <div className="phone">
            <img src={phone} alt="phone" className="phone-icon" />
            <span> +1-543-123-4567</span>
          </div>
          <div className="email">
            <img src={email} alt="email" className="email-icon" />
            <span>example@fylo.com</span>
          </div>
        </div>

        <div className="about-us-sect">
          <div className="link">About Us</div>
          <div className="link">Jobs</div>
          <div className="link">Press</div>
          <div className="link">Blog</div>
        </div>

        <div className="contact-us-sect">
          <div className="link">Contact Us</div>
          <div className="link">Terms</div>
          <div className="link">Privacy</div>
        </div>

        <div className="socials">
          <div className="icon-wrapper">
            <i className="fa-brands fa-facebook-f"></i>
          </div>
          <div className="icon-wrapper">
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="icon-wrapper">
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
