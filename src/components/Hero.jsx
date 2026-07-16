import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import bottleImg from '../assets/bottle.png'

/* ── Floating Particle ── */
function Particle({ style }) {
  return <span className="particle" style={style} aria-hidden="true" />
}

/* ── Generate random particles ── */
function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 10 + 8,
  }))

  return (
    <div className="particles" aria-hidden="true">
      {particles.map((p) => (
        <Particle
          key={p.id}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: Math.random() * 0.5 + 0.2,
          }}
        />
      ))}
    </div>
  )
}

/* ── Text animation variants ── */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    setTilt({
      x: ((e.clientX - cx) / rect.width) * 18,
      y: ((e.clientY - cy) / rect.height) * -12,
    })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Hero section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, #1e0a3c 0%, #0a0010 65%)' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glowing orbs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }}
      />

      <Particles />

      <div className="container-max section-padding relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Left: Text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6 text-center lg:text-left pt-24 lg:pt-0"
        >
          {/* Badge */}
          <motion.div variants={item} className="flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase glass glow-border text-brand-accent">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse-slow" />
              Limited Edition Launch
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-none tracking-tight"
          >
            The Scent of{' '}
            <span className="block italic text-gradient">Midnight</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p variants={item} className="text-lg sm:text-xl text-brand-muted max-w-md mx-auto lg:mx-0 leading-relaxed font-light">
            Where luxury fragrance meets skin science. <em className="text-brand-accent not-italic">Midnight Ceramide</em> fuses 
            deep nocturnal accords with next-generation ceramide technology for a scent that lingers — and nourishes.
          </motion.p>

          {/* Notes */}
          <motion.div variants={item} className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {['Oud & Amber', 'Black Orchid', 'Vetiver', 'Ceramide Complex'].map((note) => (
              <span key={note} className="px-3 py-1 rounded-full text-xs font-medium text-brand-muted glass">
                {note}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-row sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="#waitlist"
              id="hero-waitlist-cta"
              aria-label="Join the exclusive waitlist"
              className="btn-primary"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Join Waitlist
            </a>
            <a
              href="#features"
              id="hero-features-cta"
              aria-label="Discover the benefits"
              className="btn-outline"
            >
              Discover
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.p variants={item} className="text-sm text-brand-muted">
            <span className="text-brand-accent font-semibold">2,400+</span> people already on the waitlist
          </motion.p>
        </motion.div>

        {/* Right: Bottle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-center justify-center relative"
          aria-hidden="true"
        >
          {/* Glow ring */}
          <div
            className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full opacity-30 blur-3xl"
            style={{ background: 'radial-gradient(circle, #7c3aed 0%, #a855f7 40%, transparent 70%)' }}
          />
          {/* Rotating ring */}
          <div
            className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-purple-700/30"
            style={{ animation: 'spin 20s linear infinite' }}
          />
          <div
            className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-purple-600/20"
            style={{ animation: 'spin 15s linear infinite reverse' }}
          />

          {/* Bottle image — parallax on mouse */}
          <motion.img
            src={bottleImg}
            alt="Midnight Ceramide luxury perfume bottle"
            className="relative z-10 w-56 sm:w-72 lg:w-80 xl:w-96 drop-shadow-2xl object-contain"
            animate={{
              rotateY: tilt.x,
              rotateX: tilt.y,
              y: [0, -20, 0],
            }}
            transition={{
              rotateY: { duration: 0.6, ease: 'easeOut' },
              rotateX: { duration: 0.6, ease: 'easeOut' },
              y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            }}
            style={{ perspective: 1000 }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs text-brand-muted tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-purple-700/40 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-brand-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
