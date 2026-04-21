"use client";
import { useState } from "react";
import "../app/css/CertCard.css";

export default function CertCard({ title, subtitle, details, imageSrc, badgeIcon }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="cert-card">
        <div className="seal-container"> 
          <div className="cert-badge">
            {/* ADDED: Class 'real-seal' */}
            <img src={badgeIcon || "/assets/images/certificates/trademark_seal.png"} alt="Seal" className="real-seal" />
          </div>
        </div>
        <h3>{title}</h3>
        <p className="cert-subtitle">{subtitle}</p>
        
        <div className="cert-details">
          {details.map((item, index) => (
            <div key={index} className="cert-row">
              <span className="label">{item.label}:</span>
              <span className="value">{item.value}</span>
            </div>
          ))}
        </div>

        <button className="view-btn" onClick={() => setShowModal(true)}>
          View Certificate
        </button>
      </div>

      {/* Reusable Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-x" onClick={() => setShowModal(false)}>&times;</button>
            <div className="modal-body">
              <div className="image-wrapper">
                {/* Ensure this path starts with / and matches your public folder */}
                <img 
                  src={imageSrc} 
                  alt={title} 
                  onError={(e) => { e.target.src = "/assets/images/placeholder-cert.jpg"; }} 
                />
              </div>
              <div className="modal-footer">
                <h4>{title} - Verified</h4>
                <p>Authentic Document of Kulirma Heritage</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}