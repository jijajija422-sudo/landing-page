import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#features', label: 'Benefits' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#waitlist', label: 'Waitlist' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleMobileLink = () => setMobileOpen(false)

  // Motion variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1], // premium easeOutQuart
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.35,
        ease: 'easeIn',
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const linkVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: 15, transition: { duration: 0.25 } },
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen ? 'glass py-3.5 shadow-lg shadow-midnight-900/50' : 'py-4 bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <a href="#" aria-label="Midnight Ceramide home" className="group flex items-center gap-2 min-w-0 z-50">
          <span className="w-9 h-9 rounded-full bg-purple-gradient flex items-center justify-center text-white text-sm font-bold shadow-md shadow-purple-500/30 shrink-0">
            M
          </span>
          <span className="font-display text-lg sm:text-xl font-semibold tracking-wide text-gradient truncate">
            Midnight Ceramide
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover-underline text-sm font-medium text-brand-muted hover:text-brand-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#waitlist"
          id="nav-waitlist-cta"
          aria-label="Join the waitlist"
          className="hidden md:inline-flex btn-primary text-sm px-6 py-3"
        >
          Join Waitlist
        </a>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden z-50 touch-target flex flex-col items-center justify-center gap-1.5 rounded-full p-2.5 glass glow-border hover:bg-purple-900/20 active:scale-95 transition-all duration-200 w-11 h-11"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-brand-accent rounded-full"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-brand-accent rounded-full"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-brand-accent rounded-full"
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="md:hidden fixed inset-0 z-40 bg-[#0a0010]/98 backdrop-blur-2xl flex flex-col justify-between px-6 pb-12 pt-28"
          >
            {/* Glowing background orbs for aesthetic */}
            <div
              className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
            />
            <div
              className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }}
            />

            <ul className="flex flex-col gap-6 text-center relative z-10" role="list">
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={linkVariants}>
                  <a
                    href={link.href}
                    onClick={handleMobileLink}
                    className="block text-2xl font-display font-medium text-brand-text/90 hover:text-brand-accent active:text-brand-accent transition-colors duration-200 py-2.5 touch-target"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={linkVariants} className="mt-4">
                <a
                  href="#waitlist"
                  onClick={handleMobileLink}
                  className="btn-primary w-full max-w-xs justify-center mx-auto py-4 text-base touch-target"
                >
                  Join Waitlist
                </a>
              </motion.li>
            </ul>

            <motion.div variants={linkVariants} className="flex flex-col items-center gap-4 relative z-10">
              <div className="w-12 h-px bg-purple-900/40" />
              <p className="text-xs text-brand-muted uppercase tracking-widest font-semibold">Midnight Ceramide</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
