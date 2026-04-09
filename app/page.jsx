"use client";
import { useEffect, useState } from "react";
import "./css/home.css";

export default function Home() {
  const [index, setIndex] = useState(0);

  const slides = [
    { desktop: "/assets/images/slide1.jpg", mobile: "/assets/images/slide1_m.jpg" },
    { desktop: "/assets/images/slide2.jpg", mobile: "/assets/images/slide2_m.jpg" },
    { desktop: "/assets/images/slide3.jpg", mobile: "/assets/images/slide3_m.jpg" },
    { desktop: "/assets/images/slide4.jpg", mobile: "/assets/images/slide4_m.jpg" },
    { desktop: "/assets/images/slide5.jpg", mobile: "/assets/images/slide5_m.jpg" },
    { desktop: "/assets/images/slide6.jpg", mobile: "/assets/images/slide6_m.jpg" },
  ];
   const items = [
  {
    icon: "🌿",
    title: "Ayurvedic Formulation",
    subtitle: "Traditional Wisdom"
  },
  {
    icon: "🍃",
    title: "Natural Ingredients",
    subtitle: "100% Pure Extracts"
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Trusted by Families",
    subtitle: "Since 1984"
  },
  {
    icon: "✔️",
    title: "Certified Quality",
    subtitle: "Trademarked Care"
  },
];
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // simple counter animation
  useEffect(() => {
    let c1 = 0;
    let c2 = 0;

    const interval = setInterval(() => {
      if (c1 < 45) {
        c1++;
        setCount1(c1);
      }
      if (c2 < 20) {
        c2++;
        setCount2(c2);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

 const testimonials = [
    {
      video: "https://www.youtube.com/embed/ysz5S6PUM-U",
      text: "I experienced amazing results with their Ayurvedic treatment. Highly recommended for natural healing.",
      name: "Priya S.",
    },
    {
      video: "https://www.youtube.com/embed/jNQXAC9IVRw",
      text: "Professional staff and authentic medicines. My family trusts them completely.",
      name: "Ramesh K.",
    },
    {
      video: "https://www.youtube.com/embed/tgbNymZ7vqY",
      text: "Best place for holistic wellness. Felt improvement within weeks.",
      name: "Anita R.",
    },
  ];
  return (
    <main>
      <section>
        <div className="banner">
          <div className="carousel">

            {/* Slides */}
            <div className="carousel-inner">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`carousel-item ${i === index ? "active" : ""}`}
                >
                  <img
                    src={slide.desktop}
                    className="desktop"
                    alt="slide"
                  />
                  <img
                    src={slide.mobile}
                    className="mobile"
                    alt="slide"
                  />
                </div>
              ))}
            </div>

            {/* Indicators */}
            <div className="carousel-indicators">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={i === index ? "active" : ""}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>

            {/* Controls */}
            <button
              className="prev"
              onClick={() =>
                setIndex((index - 1 + slides.length) % slides.length)
              }
            >
              ❮
            </button>

            <button
              className="next"
              onClick={() => setIndex((index + 1) % slides.length)}
            >
              ❯
            </button>

          </div>
        </div>
      </section>
     

     
    <section className="trustbar-aesthetic">
      {/* Decorative background element */}
      <div className="organic-shape"></div>
      
      <div className="trustbar-wrapper">
        {items.map((item, index) => (
          <div className="aesthetic-item" key={index}>
            <div className="icon-circle">
              <span className="icon-main">{item.icon}</span>
              <div className="icon-pulse"></div>
            </div>
            <div className="text-content">
              <h4>{item.title}</h4>
              <span>{item.subtitle || "Authentic Care"}</span>
            </div>
          </div>
        ))}
      </div>
    </section>

         <section className="stats">
      <div className="stats-container">  
        {/* Left Content */}
        <div className="stats-left">
          <h2>Our Status In Numbers</h2>
          <p>
            Our team has cured more than <strong>10,000+ people</strong> with
            trusted Ayurvedic treatments.
          </p>
          <button className="stats-btn">BOOK APPOINTMENT</button>
        </div>
        {/* Right Content */}
        <div className="stats-right">
          <div className="stat-box">
            <h3>{count1}+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-box">
            <h3>{count2}+</h3>
            <p>Awards & Accreditation</p>
          </div>
        </div>
      </div>
    </section>
    




<section className="testimonials">
  <div className="testimonials-container">
    {/* Header */}
    <div className="testimonials-header">
      <h2>Healing Stories from Our Patients</h2>
      <p>Trusted Ayurveda care that brings real, lasting results</p>
    </div>

    {/* Featured Video Testimonial */}
    <div className="video-testimonial">
      <div className="video-container">
        <iframe
src="https://www.youtube.com/embed/FWSL0I18OWw"
          title="Patient Testimonial"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-content">
        <h3>Real Recovery Journeys</h3>
        <p>Watch how our holistic approach transformed lives through authentic Ayurveda.</p>
      </div>
    </div>

    {/* Text Testimonials Grid */}
    <div className="testimonial-cards">
      <div className="card">
        <div className="stars">★★★★★</div>
        <p>“I had chronic skin issues for years. After using their Ayurvedic treatment, I saw visible improvement within weeks.”</p>
        <h4>Priya S.</h4>
      </div>

      <div className="card">
        <div className="stars">★★★★★</div>
        <p>“Very natural and safe products. My family has been using them for over a year now with great results.”</p>
        <h4>Ramesh K.</h4>
      </div>

      <div className="card">
        <div className="stars">★★★★★</div>
        <p>“Professional care and authentic Ayurveda approach. Highly recommended for long-term health.”</p>
        <h4>Anitha M.</h4>
      </div>
    </div>
  </div>
</section>
   </main>
   );
}