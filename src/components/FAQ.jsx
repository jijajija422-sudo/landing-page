import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const faqs = [
  {
    id: 'faq-1',
    question: 'What makes Midnight Ceramide different from other luxury perfumes?',
    answer:
      'Midnight Ceramide is the world\'s first perfume to integrate pharmaceutical-grade ceramide technology directly into a fine fragrance formula. While other perfumes focus purely on scent, ours actively nourishes and repairs your skin barrier with every application — combining 18-hour longevity with visible skincare benefits.',
  },
  {
    id: 'faq-2',
    question: 'What are the key fragrance notes?',
    answer:
      'Midnight Ceramide opens with top notes of Black Orchid and Smoked Bergamot. The heart unfolds with Oud, Rose Noir, and a signature Ceramide musk. The base settles into a warm, sensual blend of Amber, Vetiver, and White Sandalwood — evolving beautifully on the skin over 18 hours.',
  },
  {
    id: 'faq-3',
    question: 'Is Midnight Ceramide suitable for sensitive skin?',
    answer:
      'Yes! Our formula was dermatologist-tested and designed specifically for sensitive skin. It is free from parabens, phthalates, synthetic dyes, and common allergens. The ceramide complex actually helps strengthen the skin barrier, making it beneficial for sensitive, dry, or compromised skin types.',
  },
  {
    id: 'faq-4',
    question: 'When will the perfume launch and how does the waitlist work?',
    answer:
      'We are targeting a global launch in Q4 2025. As a waitlist member, you\'ll receive exclusive early access 48 hours before the public, a 20% founding member discount, and a complimentary deluxe sample with your first order. We\'ll notify you via email the moment your access window opens.',
  },
  {
    id: 'faq-5',
    question: 'Will there be international shipping?',
    answer:
      'Yes! We will ship to 60+ countries at launch. International customers will also receive priority access based on their waitlist position. Shipping costs and estimated delivery times will be provided at checkout. We use temperature-controlled shipping to ensure product integrity.',
  },
  {
    id: 'faq-6',
    question: 'Are your ingredients ethically sourced and cruelty-free?',
    answer:
      'Absolutely. Midnight Ceramide is 100% vegan and certified cruelty-free by Leaping Bunny. Our Oud is sustainably sourced from certified plantations (not wild), our florals are traceable to their origin farms, and we maintain full supply-chain transparency. We are also carbon-neutral in our manufacturing.',
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-purple-900/30 last:border-0">
      <button
        id={item.id}
        aria-expanded={isOpen}
        aria-controls={`${item.id}-answer`}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 py-5 sm:py-5.5 text-left group focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-primary rounded-lg transition-colors"
      >
        <span className="font-medium text-brand-text group-hover:text-brand-accent group-active:text-brand-accent transition-colors duration-200 pr-4 text-sm sm:text-base leading-snug">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-brand-primary group-active:scale-90 transition-transform duration-200"
          style={{ background: 'rgba(139, 92, 246, 0.1)' }}
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${item.id}-answer`}
            role="region"
            aria-labelledby={item.id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-brand-muted leading-relaxed text-sm sm:text-base">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      ref={ref}
      className="section-padding relative"
      style={{ background: 'linear-gradient(180deg, #0a0010 0%, #0d001a 50%, #0a0010 100%)' }}
    >
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: Sticky header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 lg:sticky lg:top-28 text-center lg:text-left"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-primary mb-4">
              FAQ
            </span>
            <h2
              id="faq-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-text mb-4"
            >
              Got{' '}
              <span className="text-gradient italic">Questions?</span>
            </h2>
            <p className="text-brand-muted leading-relaxed mb-8">
              Everything you need to know about Midnight Ceramide before we launch. Can't find your answer?
            </p>
            <a
              href="mailto:hello@midnightceramide.com"
              id="faq-contact-link"
              aria-label="Email us your question"
              className="btn-outline text-sm w-full sm:w-auto"
            >
              Contact Us
            </a>

            {/* Decorative glow sphere */}
            <div
              className="hidden lg:block mt-12 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }}
              aria-hidden="true"
            />
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3 glass glow-border rounded-2xl px-4 sm:px-6 lg:px-8 py-2 sm:py-4"
          >
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                item={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
