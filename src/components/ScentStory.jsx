import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const notes = [
  { layer: "Top Notes", items: ["Bergamot", "Dark Rose", "Iris"], delay: 0, color: "#c084fc" },
  { layer: "Heart Notes", items: ["Black Orchid", "Oud", "Patchouli"], delay: 0.15, color: "#a855f7" },
  { layer: "Base Notes", items: ["Smoked Amber", "Vetiver", "Cashmere Musk"], delay: 0.3, color: "#7c3aed" },
  { layer: "Skin Complex", items: ["Ceramide", "Squalane", "Hyaluronic Acid"], delay: 0.45, color: "#6d28d9" },
]

const stats = [
  { value: 2400, suffix: "+", label: "on the waitlist" },
  { value: 18, suffix: "h", label: "longevity guaranteed" },
  { value: 98, suffix: "%", label: "satisfaction rate" },
  { value: 5, suffix: "★", label: "average rating" },
]

function CountUp({ target, suffix, inView }) {
  const count = useRef(0)
  const ref = useRef(null)

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3 }}
    >
      <motion.span
        ref={ref}
        initial={{ innerText: 0 }}
        animate={inView ? { innerText: target } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
        onUpdate={(latest) => {
          if (ref.current) ref.current.textContent = Math.round(latest.innerText ?? 0)
        }}
      >
        0
      </motion.span>
      {suffix}
    </motion.span>
  )
}

export default function ScentStory() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      aria-labelledby="scent-story-heading"
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0010 0%, #100020 50%, #0a0010 100%)" }}
    >
      {/* Glow orb */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
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
            The Formula
          </span>
          <h2
            id="scent-story-heading"
            className="font-display text-4xl sm:text-5xl font-semibold text-brand-text mb-4"
          >
            Composed Like{" "}
            <span className="text-gradient italic">Music</span>
          </h2>
          <p className="text-brand-muted max-w-xl mx-auto leading-relaxed">
            Four distinct layers that evolve on your skin across 18 hours — from the first whisper of bergamot to the lasting warmth of cashmere musk.
          </p>
        </motion.div>

        {/* Note pyramid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-4">
            {notes.map((layer, i) => (
              <motion.div
                key={layer.layer}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: layer.delay }}
                className="group relative rounded-2xl glass glow-border p-5 overflow-hidden"
              >
                {/* Left color bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{ background: layer.color }}
                />
                <div className="pl-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: layer.color, boxShadow: `0 0 8px ${layer.color}` }}
                    />
                    <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: layer.color }}>
                      {layer.layer}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full text-xs font-medium text-brand-muted glass"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="glass glow-border rounded-2xl p-6 text-center group hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="font-display text-4xl sm:text-5xl font-semibold text-gradient mb-2">
                  <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
                </div>
                <div className="text-xs text-brand-muted tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
