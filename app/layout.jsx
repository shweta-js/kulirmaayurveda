import '../app/css/globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}