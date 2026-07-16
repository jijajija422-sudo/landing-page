import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return

    const move = (e) => { pos.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener("mousemove", move)

    const loop = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${ringPos.current.x - 16}px, ${ringPos.current.y - 16}px)`
      }
      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)

    const onEnter = () => { ring.current?.classList.add("cursor-hover") }
    const onLeave = () => { ring.current?.classList.remove("cursor-hover") }
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter)
      el.addEventListener("mouseleave", onLeave)
    })

    return () => {
      window.removeEventListener("mousemove", move)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div
        ref={dot}
        className="cursor-dot"
        aria-hidden="true"
      />
      <div
        ref={ring}
        className="cursor-ring"
        aria-hidden="true"
      />
    </>
  )
}
