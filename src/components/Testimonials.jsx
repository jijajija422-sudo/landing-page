import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Ariana D.',
    role: 'Luxury Fragrance Collector',
    rating: 5,
    quote:
      "I've worn every major niche house — Maison Margiela, Byredo, Le Labo — and Midnight Ceramide genuinely surprises me. The drydown is hauntingly beautiful. My skin has never felt this soft from a perfume.",
    avatar: 'A',
    color: '#6d28d9',
  },
  {
    id: 2,
    name: 'Marcus T.',
    role: 'Skincare Enthusiast',
    rating: 5,
    quote:
      "Finally, a luxury perfume that double-duties as skincare. I noticed visible improvement in my skin texture within two weeks of daily use. The ceramide technology is a genuine game-changer.",
    avatar: 'M',
    color: '#7c3aed',
  },
  {
    id: 3,
    name: 'Sophia L.',
    role: 'Beauty Editor',
    rating: 5,
    quote:
      "The longevity is extraordinary — I sprayed it at 8 AM and was still getting compliments at midnight. The bottle itself is a sculpture. This will be my signature scent for years to come.",
    avatar: 'S',
    color: '#8b5cf6',
  },
  {
    id: 4,
    name: 'James O.',
    role: 'Brand Consultant',
    rating: 5,
    quote:
      "Midnight Ceramide smells like confidence and mystery in a bottle. It opens with a bold oud note, then softens into the most skin-like amber. I get compliments absolutely everywhere I go.",
    avatar: 'J',
    color: '#a855f7',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="star w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0010 0%, #0f001f 50%, #0a0010 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-primary mb-4">
            What They Say
          </span>
          <h2
            id="testimonials-heading"
            className="font-display text-4xl sm:text-5xl font-semibold text-brand-text mb-4"
          >
            Worn &{' '}
            <span className="text-gradient italic">Loved</span>
          </h2>
          <p className="text-brand-muted max-w-md mx-auto">
            Our early testers experienced the future of luxury fragrance — here's what they had to say.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.article
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              aria-label={`Testimonial from ${testimonials[current].name}`}
              className="glass glow-border rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
            >
              {/* Decorative quote mark */}
              <span
                className="absolute top-4 left-6 text-8xl font-display leading-none opacity-10 text-brand-primary select-none"
                aria-hidden="true"
              >
                "
              </span>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                <StarRating count={testimonials[current].rating} />
              </div>

              {/* Quote */}
              <blockquote className="text-lg sm:text-xl font-serif italic text-brand-text leading-relaxed mb-8">
                "{testimonials[current].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${testimonials[current].color}, #a855f7)` }}
                  aria-hidden="true"
                >
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <cite className="not-italic font-semibold text-brand-text block">
                    {testimonials[current].name}
                  </cite>
                  <span className="text-sm text-brand-muted">{testimonials[current].role}</span>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              id="testimonial-prev"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full glass glow-border flex items-center justify-center text-brand-accent hover:text-brand-text hover:border-purple-400/60 transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonials navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  id={`testimonial-dot-${i}`}
                  aria-selected={i === current}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-2 bg-brand-primary'
                      : 'w-2 h-2 bg-brand-muted hover:bg-brand-primary'
                  }`}
                />
              ))}
            </div>

            <button
              id="testimonial-next"
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full glass glow-border flex items-center justify-center text-brand-accent hover:text-brand-text hover:border-purple-400/60 transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mini stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="grid grid-cols-3 gap-4 mt-16 max-w-lg mx-auto"
        >
          {[
            { value: '98%', label: 'Satisfaction rate' },
            { value: '18h', label: 'Average longevity' },
            { value: '5★', label: 'Average rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-display font-semibold text-gradient">{stat.value}</div>
              <div className="text-xs text-brand-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
