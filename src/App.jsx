import { Helmet } from 'react-helmet-async'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Gallery from './components/Gallery'
import ScentStory from './components/ScentStory'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <>
      <Helmet>
        <title>Midnight Ceramide | Luxury Perfume — Join the Waitlist</title>
        <meta
          name="description"
          content="Midnight Ceramide is a groundbreaking luxury perfume that fuses deep midnight accords with skin-nourishing ceramide technology. Join the exclusive waitlist and be first to experience it."
        />
      </Helmet>

      <CustomCursor />

      <div className="min-h-screen" style={{ background: '#0a0010' }}>
        <AnnouncementBar />
        <Navbar />
        <main id="main-content">
          <Hero />
          <Marquee />
          <Gallery />
          <ScentStory />
          <Features />
          <Testimonials />
          <FAQ />
          <Waitlist />
        </main>
        <Footer />
      </div>
    </>
  )
}
