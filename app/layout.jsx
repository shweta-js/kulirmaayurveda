// import '../app/css/globals.css'
// import { Inter, Playfair_Display } from 'next/font/google'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// const inter = Inter({ subsets: ['latin'] })
// const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

// export const metadata = {
//   title: 'Kulirma Ayurveda - Traditional Ayurvedic Products Since 1984',
//   description: 'Authentic Ayurvedic medicines, balms, and oils for natural healing and wellness.',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} ${playfair.variable} bg-ayurveda-cream`}>
//         <Navbar />
//         <main className="min-h-screen">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   )
// }

import '../app/css/globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Script from 'next/script' // Import Script for external JS

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'Kulirma Ayurveda - Traditional Ayurvedic Products Since 1984',
  description: 'Authentic Ayurvedic medicines, balms, and oils for natural healing and wellness.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable} bg-ayurveda-cream`}>
        {/* 1. The Container for the Google Translate Button */}
        {/* We put the init function here to ensure it's available when the script loads */}
        <Script id="google-translate-init" strategy="afterInteractive">
  {`
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({
        pageLanguage: 'en',
        autoDisplay: false
      }, 'google_translate_element');
    }
  `}
</Script>
        
        {/* 2. Load the actual Google Translate Script */}
        <Script 
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" 
          strategy="afterInteractive" 
        />

        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}