"use client";
import { useState } from "react";
import Link from "next/link";
import "../app/css/Navbar.css";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <nav className="navbar header">
      {/* Logo */}
      <Link href="/" className="logo">
<img src="/assets/images/logo2.png" alt="Kulirma Ayurveda" />      </Link>

      {/* Toggle Button */}
      <button
        className="navbar-toggler"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Menu */}
      <div className={`navbar-collapse ${isOpen ? "open" : ""}`}>
        <ul className="navbar-nav">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About us</Link></li>

          <li><a href="/shop">Shop</a></li>

          {/* Language Dropdown */}
          <li className="dropdown">
            <button onClick={() => setLangOpen(!langOpen)}>
              Language ▼
            </button>

            {langOpen && (
              <div className="dropdown-menu">
                <Link href="/">English</Link>
                <Link href="/mal">മലയാളം</Link>
                <Link href="/hindi">हिन्दी</Link>
                <Link href="/tamil">தமிழ்</Link>
                <Link href="/kannada">ಕನ್ನಡ</Link>
                <Link href="/telugu">తెలుగు</Link>
              </div>
            )}
          </li>

          {/* <li><Link href="/gallery">Gallery</Link></li> */}
          <li><Link href="/contact">Contact us</Link></li>

          {/* Cart */}
          {/* <li>
            <Link href="/cart">
              Cart 🛒 (<span id="cart-count">0</span>)
            </Link>
          </li> */}
        </ul>
      </div>

      {/* Flag */}
      <div className="flag">
        <img src="/assets/images/flag.png" alt="flag" />
      </div>
    </nav>
  );
}