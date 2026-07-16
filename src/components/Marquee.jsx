import { motion } from "framer-motion"

const items = [
  { label: "Oud & Amber" }, { label: "Black Orchid" }, { label: "Vetiver" },
  { label: "Ceramide Complex" }, { label: "Smoked Amber" }, { label: "Dark Rose" },
  { label: "Patchouli" }, { label: "Sandalwood" }, { label: "Musk" },
  { label: "Bergamot" }, { label: "Iris" }, { label: "Cashmere" },
]

const divider = (
  <span className="text-purple-600 text-lg mx-2 select-none" aria-hidden="true">◆</span>
)

export default function Marquee() {
  const row = [...items, ...items, ...items]
  return (
    <div className="relative overflow-hidden py-6 border-y border-purple-900/30" aria-hidden="true">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #0a0010, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(-90deg, #0a0010, transparent)" }} />
      <motion.div
        className="flex gap-0 whitespace-nowrap"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
      >
        {row.map((item, i) => (
          <span key={i} className="inline-flex items-center text-sm font-medium tracking-widest uppercase text-brand-muted px-6">
            {item.label}{divider}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
