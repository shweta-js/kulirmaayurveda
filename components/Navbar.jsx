
// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import "../app/css/Navbar.css";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [langOpen, setLangOpen] = useState(false);

//   const changeLanguage = (langCode) => {
//     // 1. Set the Google Translate Cookie
//     // Format: /source_lang/target_lang
//     document.cookie = `googtrans=/en/${langCode}; path=/`;
//     document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;

//     // 2. Refresh the page to apply the translation
//     window.location.reload();
//   };

//   return (
//     <nav className="navbar header">
//       <Link href="/" className="logo">
//         <img src="/assets/images/logo2.png" alt="Kulirma" />
//       </Link>
//        {/* Toggle Button */}
//        <button
//          className="navbar-toggler"
//          onClick={() => setIsOpen(!isOpen)}
//        >
//          ☰
//        </button>
       
//       <div className={`navbar-collapse ${isOpen ? "open" : ""}`}>
//         <ul className="navbar-nav">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/about">About us</Link></li>
//           <li><a href="/shop">Shop</a></li>
//           <li><Link href="/contact">Contact us</Link></li>

//           <li className="dropdown">
//             {/* The "Good Looking" button stays clean with NO ID */}
//             <button className="lang-trigger" onClick={() => setLangOpen(!langOpen)}>
//               Translate <span className="arrow">▼</span>
//             </button>

//             {langOpen && (
//               <div className="custom-lang-menu">
//                 <button onClick={() => changeLanguage('en')}>English</button>
//                 <button onClick={() => changeLanguage('ml')}>മലയാളം</button>
//                 <button onClick={() => changeLanguage('kn')}>ಕನ್ನಡ</button>
//                 <button onClick={() => changeLanguage('hi')}>हिन्दी</button>
//                 <button onClick={() => changeLanguage('tl')}>తెలుగు</button>
//                 <button onClick={() => changeLanguage('tl')}>தமிழ்</button>

//               </div>
//             )}
//           </li>
          
//         </ul>
//       </div>

//       {/* The Hidden Engine remains for the script to load */}
//       <div id="google_translate_element" style={{ visibility: 'hidden', position: 'absolute' }}></div>
//        {/* Flag */}
//        <div className="flag">
//          <img src="/assets/images/flag.png" alt="flag" />
//        </div>
//     </nav>
//   );
// }
"use client";
import { useState } from "react";
import Link from "next/link";
import "../app/css/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const changeLanguage = (langCode) => {
    // 1. Set the Google Translate Cookie
    document.cookie = `googtrans=/en/${langCode}; path=/`;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;

    // 2. Refresh the page to apply the translation
    window.location.reload();
  };

  return (
    <nav className="navbar header">
      <Link href="/" className="logo">
        <img src="/assets/images/logo2.png" alt="Kulirma" />
      </Link>
      
      {/* Toggle Button */}
      <button
        className="navbar-toggler"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <div className={`navbar-collapse ${isOpen ? "open" : ""}`}>
        <ul className="navbar-nav">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About us</Link></li>
          <li><a href="/shop">Shop</a></li>
          <li><Link href="/contact">Contact us</Link></li>

          <li className="dropdown">
            <button className="lang-trigger" onClick={() => setLangOpen(!langOpen)}>
              Translate <span className="arrow">▼</span>
            </button>

            {langOpen && (
              <div className="custom-lang-menu">
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('ml')}>മലയാളം</button>
                <button onClick={() => changeLanguage('kn')}>ಕನ್ನಡ</button>
                <button onClick={() => changeLanguage('hi')}>हिन्दी</button>
                <button onClick={() => changeLanguage('te')}>తెలుగు</button>
                <button onClick={() => changeLanguage('ta')}>தமிழ்</button>
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* The Hidden Engine remains for the script to load */}
      <div id="google_translate_element" style={{ visibility: 'hidden', position: 'absolute' }}></div>
      
      {/* Flag - Only shows if isOpen is false */}
      {!isOpen && (
        <div className="flag">
          <img src="/assets/images/flag.png" alt="flag" />
        </div>
      )}
    </nav>
  );
}