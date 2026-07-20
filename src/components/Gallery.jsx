import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import bottleFront from '../assets/bottle.png'
import bottleSide from '../assets/bottle_side.png'
import bottleThreeQuarter from '../assets/bottle_threequarter.png'
import bottleOverhead from '../assets/bottle_overhead.png'

const shots = [
  {
    id: 'front',
    src: bottleFront,
    label: 'Signature Front',
    caption: 'The iconic face of Midnight Ceramide — frosted purple glass meets hand-polished gold.',
  },
  {
    id: 'threequarter',
    src: bottleThreeQuarter,
    label: '¾ Editorial',
    caption: 'A three-quarter view that reveals the sculpted silhouette and depth of the bottle.',
  },
  {
    id: 'side',
    src: bottleSide,
    label: 'Side Profile',
    caption: 'Clean lines and a seamless curve — pure luxury from every angle.',
  },
  {
    id: 'overhead',
    src: bottleOverhead,
    label: 'Flat Lay',
    caption: 'An editorial overhead with purple petals and gold dust — crafted for the senses.',
  },
]

/* ── Card animation variants ── */
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section
      id="gallery"
      aria-label="Product gallery"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
      />

      <div className="container-max relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase glass glow-border text-brand-accent mb-4">
            Every Angle
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-gradient mt-3">
            A Bottle Worth Staring At
          </h2>
          <p className="mt-4 text-brand-muted max-w-md mx-auto text-sm sm:text-base leading-relaxed">
            Designed to be displayed. Crafted to be coveted.
          </p>
        </motion.div>

        {/* Grid — 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {shots.map((shot, i) => (
            <motion.button
              key={shot.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              onClick={() => setActive(shot)}
              aria-label={`View ${shot.label}`}
              className="group relative rounded-2xl overflow-hidden glass glow-border aspect-[3/4] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary min-h-[180px]"
            >
              {/* Image */}
              <img
                src={shot.src}
                alt={shot.label}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient overlay — visible on touch, animated on hover on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/95 via-midnight-950/30 to-transparent opacity-90 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Label badge — permanently visible at bottom on mobile, translates on hover on desktop */}
              <div className="absolute bottom-0 left-0 right-0 p-3.5 translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300 ease-out z-10 text-left">
                <span className="text-xs sm:text-sm font-semibold text-brand-accent tracking-wide block">
                  {shot.label}
                </span>
                <p className="text-[10px] sm:text-xs text-brand-muted mt-0.5 line-clamp-2 hidden sm:block">
                  {shot.caption}
                </p>
              </div>

              {/* Expand icon — visible on touch, hover on desktop */}
              <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full glass flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent" aria-hidden="true">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            style={{ background: 'rgba(10, 0, 16, 0.92)', backdropFilter: 'blur(20px)' }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.label}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative max-w-lg w-full rounded-3xl overflow-hidden glass glow-border"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={active.src}
                alt={active.label}
                className="w-full object-contain max-h-[70vh]"
              />
              <div className="p-5">
                <h3 className="font-semibold text-brand-accent text-base">{active.label}</h3>
                <p className="text-brand-muted text-sm mt-1">{active.caption}</p>
              </div>
              {/* Close button — 44x44px target on mobile */}
              <button
                onClick={() => setActive(null)}
                aria-label="Close lightbox"
                className="absolute top-3 right-3 w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-purple-900/40 active:scale-95 transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
