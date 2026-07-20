import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    id: 'ceramide-tech',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
      </svg>
    ),
    title: 'Ceramide Technology',
    description:
      'Pioneering the first perfume infused with pharmaceutical-grade ceramides. Each spray repairs and strengthens your skin barrier while you wear it.',
  },
  {
    id: 'midnight-accords',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    ),
    title: 'Midnight Accords',
    description:
      'A symphonic blend of Oud, Black Orchid, Vetiver, and smoked Amber that evolves on your skin through the night — never the same scent twice.',
  },
  {
    id: 'long-lasting',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: '18-Hour Longevity',
    description:
      'Our proprietary microencapsulation technology releases fragrance molecules gradually, ensuring an uninterrupted sillage from morning through midnight.',
  },
  {
    id: 'skin-nourishing',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Skin Nourishment',
    description:
      'Enriched with Hyaluronic Acid, Squalane, and Vitamin E. Unlike traditional perfumes, Midnight Ceramide actively hydrates with every application.',
  },
  {
    id: 'cruelty-free',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Ethically Crafted',
    description:
      'Certified cruelty-free, vegan, and sustainably sourced. Our ingredients are ethically harvested with full supply-chain transparency.',
  },
  {
    id: 'luxury-packaging',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Couture Packaging',
    description:
      'Hand-finished frosted glass bottle with 24k gold collar, presented in a black lacquer box with satin ribbon. A gift-worthy masterpiece.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.article
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      whileTap={{ scale: 0.98, transition: { duration: 0.15 } }}
      transition={{ delay: index * 0.08 }}
      aria-labelledby={`feature-title-${feature.id}`}
      className="group relative p-5 sm:p-6 rounded-2xl glass glow-border hover:border-purple-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Hover shimmer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shimmer"
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className="mb-4 w-14 h-14 rounded-xl flex items-center justify-center text-brand-primary group-hover:text-brand-accent transition-colors duration-300"
        style={{ background: 'rgba(139, 92, 246, 0.1)' }}
        aria-hidden="true"
      >
        {feature.icon}
      </div>

      {/* Title */}
      <h3
        id={`feature-title-${feature.id}`}
        className="text-lg font-semibold text-brand-text mb-2 group-hover:text-gradient transition-all duration-300"
      >
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-brand-muted text-sm leading-relaxed">
        {feature.description}
      </p>

      {/* Corner accent */}
      <div
        className="absolute bottom-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle at bottom right, #8b5cf6, transparent)' }}
      />
    </motion.article>
  )
}

export default function Features() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="section-padding relative"
      style={{ background: 'linear-gradient(180deg, #0a0010 0%, #0d001a 50%, #0a0010 100%)' }}
    >
      {/* Divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 opacity-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #8b5cf6, transparent)' }}
        aria-hidden="true"
      />

      <div className="container-max">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-primary mb-4">
            Why Midnight Ceramide
          </span>
          <h2
            id="features-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-text mb-4"
          >
            Luxury{' '}
            <span className="text-gradient italic">Redefined</span>
          </h2>
          <p className="text-brand-muted max-w-xl mx-auto leading-relaxed">
            We blended the art of haute perfumery with cutting-edge skin science to create 
            something entirely unprecedented — a fragrance that cares.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
