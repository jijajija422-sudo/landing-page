import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

// Launch date — set ~90 days from now for demo
const LAUNCH = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)

function useCountdown() {
  const [t, setT] = useState(() => {
    const diff = LAUNCH - Date.now()
    return diff > 0 ? diff : 0
  })
  useEffect(() => {
    const id = setInterval(() => setT(Math.max(0, LAUNCH - Date.now())), 1000)
    return () => clearInterval(id)
  }, [])
  const d = Math.floor(t / 86400000)
  const h = Math.floor((t % 86400000) / 3600000)
  const m = Math.floor((t % 3600000) / 60000)
  const s = Math.floor((t % 60000) / 1000)
  return { d, h, m, s }
}

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass glow-border rounded-xl px-3 py-3 min-w-[52px] sm:min-w-[56px] text-center">
        <span className="font-display text-2xl sm:text-3xl font-semibold text-gradient">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs text-brand-muted mt-1.5 tracking-widest uppercase">{label}</span>
    </div>
  )
}

function Countdown({ inView }) {
  const { d, h, m, s } = useCountdown()
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mb-8 sm:mb-10 text-center"
    >
      <p className="text-xs font-semibold tracking-widest uppercase text-brand-primary mb-4">
        Early access closes in
      </p>
      <div className="flex items-start justify-center gap-2 sm:gap-5 overflow-x-auto px-2 pb-1">
        <CountdownUnit value={d} label="Days" />
        <span className="font-display text-2xl text-brand-muted mt-3">:</span>
        <CountdownUnit value={h} label="Hours" />
        <span className="font-display text-2xl text-brand-muted mt-3">:</span>
        <CountdownUnit value={m} label="Min" />
        <span className="font-display text-2xl text-brand-muted mt-3">:</span>
        <CountdownUnit value={s} label="Sec" />
      </div>
    </motion.div>
  )
}

function CheckIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

export default function Waitlist() {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const validate = () => {
    if (!formData.name.trim()) return 'Please enter your full name.'
    if (!formData.email.trim()) return 'Please enter your email address.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return 'Please enter a valid email address.'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const err = validate()
    if (err) {
      setErrorMsg(err)
      return
    }
    setErrorMsg('')
    setStatus('loading')

    // Simulate async API call
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
  }

  return (
    <section
      id="waitlist"
      aria-labelledby="waitlist-heading"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0a0010 0%, #130025 40%, #1e0a3c 70%, #0a0010 100%)',
      }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #7c3aed 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-primary mb-4">
              Be First
            </span>
            <h2
              id="waitlist-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-text mb-4"
            >
              Reserve Your{' '}
              <span className="text-gradient italic">Bottle</span>
            </h2>
            <p className="text-brand-muted leading-relaxed">
              Join the exclusive waitlist and unlock early access, a{' '}
              <strong className="text-brand-accent font-semibold">20% founding discount</strong>, 
              and a complimentary sample with your first order.
            </p>
          </motion.div>

          {/* Countdown */}
          <Countdown inView={inView} />

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass glow-border rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden"
          >
            {/* Subtle shimmer bar */}
            <div
              className="absolute top-0 left-0 right-0 h-px shimmer"
              aria-hidden="true"
            />

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                /* ── Success State ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'backOut' }}
                  className="text-center py-4"
                  role="alert"
                  aria-live="polite"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: 'backOut' }}
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-accent"
                    style={{ background: 'rgba(139, 92, 246, 0.15)' }}
                  >
                    <CheckIcon />
                  </motion.div>
                  <h3 className="font-display text-3xl font-semibold text-brand-text mb-3">
                    You're on the list! 🎉
                  </h3>
                  <p className="text-brand-muted leading-relaxed">
                    Welcome, <strong className="text-brand-accent">{formData.name}</strong>. 
                    We've saved your spot and will notify{' '}
                    <strong className="text-brand-accent">{formData.email}</strong>{' '}
                    the moment early access opens.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mt-6">
                    {['Early Access', '20% Off', 'Free Sample'].map((perk) => (
                      <span key={perk} className="px-4 py-1.5 rounded-full text-xs font-semibold glass glow-border text-brand-accent">
                        ✓ {perk}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                /* ── Form ── */
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Waitlist signup form"
                >
                  <div className="flex flex-col gap-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="waitlist-name"
                        className="block text-sm font-medium text-brand-text mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        id="waitlist-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        autoComplete="name"
                        aria-required="true"
                        className="input-field"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="waitlist-email"
                        className="block text-sm font-medium text-brand-text mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        id="waitlist-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        autoComplete="email"
                        aria-required="true"
                        className="input-field"
                      />
                    </div>

                    {/* Error */}
                    <AnimatePresence>
                      {errorMsg && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          role="alert"
                          aria-live="assertive"
                          className="text-red-400 text-sm flex items-center gap-2"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 8v4M12 16h.01" />
                          </svg>
                          {errorMsg}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {/* Submit */}
                    <button
                      id="waitlist-submit"
                      type="submit"
                      disabled={status === 'loading'}
                      aria-label="Join the Midnight Ceramide waitlist"
                      className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed py-3.5"
                    >
                      {status === 'loading' ? (
                        <>
                          <motion.svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            aria-hidden="true"
                          >
                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                          </motion.svg>
                          Joining…
                        </>
                      ) : (
                        <>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                          Join the Exclusive Waitlist
                        </>
                      )}
                    </button>

                    {/* Privacy note */}
                    <p className="text-xs text-brand-muted text-center leading-relaxed">
                      🔒 We respect your privacy. No spam, ever. Unsubscribe at any time.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Count indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center text-sm text-brand-muted mt-6"
          >
            <span className="text-brand-accent font-semibold">2,400+</span> people already waiting
          </motion.p>
        </div>
      </div>
    </section>
  )
}
