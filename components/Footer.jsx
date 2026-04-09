import Link from 'next/link'
import "../app/css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Brand Section */}
          <div className="footer-brand">
            <h3 className="footer-logo">Kulirma <span>Ayurveda</span></h3>
            <p className="footer-desc">
              Authentic healing through time-tested Ayurvedic formulations. 
              Restoring balance to your life since 1984.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="WhatsApp">WA</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/products">Our Products</Link></li>
              <li><Link href="/about">Our Story</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="footer-links">
            <h4>Customer Care</h4>
            <ul>
              <li><Link href="/shipping">Shipping Policy</Link></li>
              <li><Link href="/returns">Refunds & Returns</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <p><strong>Email:</strong> care@kulirma.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Location:</strong> Kerala, India</p>
            <div className="trust-badge">
              100% Natural • GMP Certified
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kulirma Ayurveda. All rights reserved.</p>
          <p className="made-by">Made with 🌿 in Kerala</p>
        </div>
      </div>
    </footer>
  )
}