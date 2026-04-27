"use client";
import React from 'react';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import "../css/Contact.css";

export default function ContactPage() {
  return (
    <main className="contact-page">
      {/* Sub-page Banner */}
      <section className="contact-hero">
        <img src="/assets/images/inner_banner.jpg" alt="Contact Kulirma" className="hero-bg" />
        <div className="hero-overlay">
          <h1>Contact Us</h1>
          <p>We are here to help you on your healing journey</p>
        </div>
      </section>

      <div className="container">
        {/* Contact Info Cards */}
        <section className="info-cards-grid">
          <div className="info-card">
            <div className="info-icon">📧</div>
            <h3>Email Us</h3>
            <a href="mailto:mail@kulirmaayurveda.com">mail@kulirmaayurveda.com</a>
            <a href="mailto:kulirmaayurveda@gmail.com">kulirmaayurveda@gmail.com</a>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Call Us</h3>
            <a href="tel:+919847962414">+91 98 479 624 14</a>
            <a href="tel:+918921416185">+91 89 214 161 85</a>
          </div>

          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Visit Us</h3>
            <p>Moozhikulam Lakshmana Swami Temple, South side, Kurumaseri, Ernakulam, Kerala</p>
          </div>
        </section>

        {/* Contact Form & Map Section */}
         <section className="contact-main-grid">
          {/*<div className="contact-form-container">
            <h2>Send us a Message</h2>
            <form className="aesthetic-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="How can we help you?" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div> */}

         
  <div className="contact-form-container">
    <h2>Send us a Message</h2>

    <form
      className="aesthetic-form"
      onSubmit={(e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        const whatsappMessage = `Hello, I have an enquiry.%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

        const phoneNumber = "919847962414"; // 🔥 replace with your number

        window.open(
          `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
          "_blank"
        );
      }}
    >
      <div className="form-group">
        <input type="text" name="name" placeholder="Your Name" required />
      </div>

      <div className="form-group">
        <input type="email" name="email" placeholder="Your Email" required />
      </div>

      <div className="form-group">
        <textarea
          name="message"
          placeholder="How can we help you?"
          rows="5"
          required
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">
        Send via WhatsApp
      </button>
    </form>
  </div>

 <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.182470650948!2d76.3283283!3d10.1654823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDA5JzU1LjciTiA3NsKwMTknNDIuMCJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '15px' }} 
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
        </section>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/918921416185" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <span>Chat on WhatsApp</span>
        <i className="fab fa-whatsapp"></i>
      </a>
    </main>
  );
}