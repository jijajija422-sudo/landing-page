import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'

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

      <div className="min-h-screen" style={{ background: '#0a0010' }}>
        <Navbar />
        <main id="main-content">
          <Hero />
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
