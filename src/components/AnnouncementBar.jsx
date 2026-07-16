import { motion } from "framer-motion"

const messages = [
  "✦ Limited to 5,000 founding members",
  "✦ 20% off for waitlist members",
  "✦ Free sample with first order",
  "✦ Launching Q3 2025",
  "✦ Cruelty-free & vegan certified",
  "✦ 18-hour longevity guaranteed",
]

export default function AnnouncementBar() {
  const repeated = [...messages, ...messages]

  return (
    <div
      className="relative overflow-hidden py-2.5 z-40"
      style={{ background: "linear-gradient(90deg, #3b0764, #6d28d9, #3b0764)" }}
      aria-label="Announcements"
    >
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #3b0764, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(-90deg, #3b0764, transparent)" }} />
      <motion.div
        className="flex gap-0 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        aria-hidden="true"
      >
        {repeated.map((msg, i) => (
          <span key={i} className="inline-flex items-center gap-8 px-8 text-xs font-semibold tracking-widest uppercase text-purple-100">
            {msg}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
