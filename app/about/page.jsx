"use client";
import { useState } from 'react';
import Link from 'next/link';
import "../css/About.css";
import CertCard from "../../components/CertCard.jsx";

export default function AboutPage() {
    const [selectedImg, setSelectedImg] = useState(null);
    const [showModal, setShowModal] = useState(false);

  const newsImages = [
    "/assets/images/news/16.jpg",
    "/assets/images/news/17.jpg",
    "/assets/images/news/18.jpg",
    "/assets/images/news/19.jpg",
    "/assets/images/news/20.jpg",
    "/assets/images/news/21.jpg"
  ];
  const [revealedCases, setRevealedCases] = useState({});

  // Function to toggle reveal status for a specific ID
  const toggleReveal = (id) => {
    setRevealedCases(prev => ({
      ...prev,
      [id]: !prev[id] // Toggle the boolean value
    }));
  };

  const caseStudies = [
    {
      id: 'case1',
      title: 'Chronic Burn Care',
      timeline: '10 Days Recovery',
      beforeImg: '/assets/images/recovery/burn-before.jpg',
      afterImg: '/assets/images/recovery/burn-after.jpg',
      description: 'Patient presented with 2nd-degree burns. Significant healing observed after 10 days of Kulirma Burn Care application.'
    },
    {
      id: 'case2',
      title: 'Wound Support',
      timeline: '2 Weeks Recovery',
      beforeImg: '/assets/images/recovery/wound-before.jpg',
      afterImg: '/assets/images/recovery/wound-after.jpg',
      description: 'Non-healing wound treated with traditional formulations. Complete closure achieved in 14 days.'
    }
  ];
  const trademarkDetails = [
        { label: "Reg No", value: "4328073" },
        { label: "Class", value: "Ayurvedic & Medicinal" },
        { label: "Date", value: "22 Oct 2019" }
    ];

    const gmpDetails = [
        { label: "GMP No.", value: "1268" },
        { label: "Authority", value: "Govt of Kerala" },
        { label: "Date", value: "30 Oct 2025" }
    ];
  return (
    <main className="about-page">
      {/* 1. HERO SECTION */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <img src="/assets/images/about1.png" alt="Kulirma Heritage" className="hero-img" />
        <div className="hero-content">
          {/* <span className="hero-subtitle">ESTABLISHED 1984</span> */}
          {/* <h1>The Science of <br /><span>Natural Healing</span></h1> */}
          <h2>Traditional Ayurvedic formulations focused on advanced skin care and restorative healing support.</h2>
        
        </div>
      </section>

      {/* 2. WHO WE ARE & APPROACH */}
      <section className="about-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <label>OUR ESSENCE</label>
              <h2>Grounded in tradition, <br/>proven by results.</h2>
              <p>
                Kulirma Ayurveda develops herbal formulations inspired by traditional 
                Siddha and Ayurvedic practices. We focus on supporting natural skin 
                resilience, specifically in burn care and complex wound support.
              </p>
            </div>
            <div className="approach-cards">
              <div className="a-card">
                <span className="card-num">01</span>
                <h4>Traditional Wisdom</h4>
                <p>Formulations passed down through generations of practitioners.</p>
              </div>
              <div className="a-card">
                <span className="card-num">02</span>
                <h4>Clinical Focus</h4>
                <p>Specialized expertise in burn and wound care support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
     <section className="media-section">
        <div className="container">
          <h3 className="section-label">AS FEATURED IN</h3>

      {/* 3. MEDIA & RECOGNITION (The Trust Builder) */}
      <div className="media-ticker">
        {newsImages.map((src, index) => (
          <div 
            key={index} 
            className="media-item" 
            onClick={() => setSelectedImg(src)}
          >
            <img src={src} alt={`Media ${index}`} />
          </div>
        ))}
      </div>
      </div>
      </section>

      {/* Lightbox / Modal */}
      {selectedImg && (
        <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
          <div className="modal-content">
            <img src={selectedImg} alt="Enlarged view" />
            <p style={{ color: 'white', textAlign: 'center' }}>Click anywhere to close</p>
          </div>
        </div>
      )}

      {/* 4. HEALING STORIES PREVIEW */}
      
    <section className="healing-stories-detailed">
      <div className="container">
        <div className="section-header-aesthetic">
          <label>DOCUMENTED RESULTS</label>
          <h2>Healing Journeys</h2>
          <p>Real cases, real recovery. Click "Before" images to reveal sensitive content.</p>
        </div>

        <div className="stories-grid">
          {caseStudies.map((study) => {
            const isRevealed = revealedCases[study.id];

            return (
              <div className="story-card-aesthetic" key={study.id}>
                
                {/* Image Comparison Area */}
                <div className="image-comparison-aesthetic">
                  
                  {/* BEFORE IMAGE (The blurry one) */}
                  <div 
                    className={`comparison-box before ${isRevealed ? 'revealed' : 'hidden'}`}
                    onClick={() => toggleReveal(study.id)}
                  >
                    <img src={study.beforeImg} alt={`${study.title} - Before`} />
                    
                    {/* The Overlay that disappears */}
                    {!isRevealed && (
                      <div className="blur-overlay">
                        <div className="reveal-btn">
                          <span className="eye-icon">👁️</span>
                          <span>Click to View Before</span>
                          <span className="sens-tag">Sensitive Content</span>
                        </div>
                      </div>
                    )}
                    <span className="status-label">DAY 1 (BEFORE)</span>
                  </div>

                  {/* AFTER IMAGE (Always clear) */}
                  <div className="comparison-box after">
                    <img src={study.afterImg} alt={`${study.title} - After`} />
                    <span className="status-label success">DAY 10 (AFTER)</span>
                  </div>
                </div>

                {/* Text Area */}
                <div className="story-content-aesthetic">
                  <div className="story-meta">
                    <h4>{study.title}</h4>
                    <span className="timeline-tag">{study.timeline}</span>
                  </div>
                  <p>{study.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

      {/* 5. QUALITY & TRUST */}
      {/* <section className="trust-footer">
        <div className="container">
            <div className="trust-grid">
                <div className="trust-item">
                    <img src="/assets/images/cert-icon.png" alt="GMP" />
                    <h4>GMP Certified</h4>
                </div>
                <div className="trust-item">
                    <img src="/assets/images/tm-icon.png" alt="Trademark" />
                    <h4>Trademarked Brand</h4>
                </div>
            </div>
            
            <div className="about-cta">
                <h3>Need Personalized Guidance?</h3>
                <div className="cta-btns">
                    <a href="https://wa.me/..." className="btn-wa">WhatsApp Consultation</a>
                    <a href="tel:..." className="btn-call">Call Now</a>
                </div>
            </div>
        </div>
      </section> */}
      <section className="about-certs">
      <div className="cert-grid">
        <CertCard 
          title="Trademark Registered"
          subtitle="Government of India Protection"
          details={trademarkDetails}
          imageSrc="/assets/images/certificates/trademark.jpg"
          badgeIcon="/assets/images/certificates/trademark_seal.png"
        />
        
        <CertCard 
          title="GMP Certified"
          subtitle="Quality & Safety Assurance"
          details={gmpDetails}
          imageSrc="/assets/images/certificates/gmp.jpg"
          badgeIcon="/assets/images/certificates/gmp_seal.png"
        />
      </div>
    </section>
    </main>
  );
}