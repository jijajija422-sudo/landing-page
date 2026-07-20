const footerLinks = {
  Product: [
    { label: 'Benefits', href: '#features' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Join Waitlist', href: '#waitlist' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Our Story', href: '#' },
    { label: 'Sustainability', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.8a8.18 8.18 0 0 0 4.78 1.52V6.83a4.85 4.85 0 0 1-1.01-.14z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="relative border-t border-purple-900/30 overflow-hidden"
      style={{ background: '#080010' }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #8b5cf6, transparent)' }}
        aria-hidden="true"
      />

      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <a href="#" aria-label="Midnight Ceramide home" className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-purple-gradient flex items-center justify-center text-white text-sm font-bold shadow-md shadow-purple-500/30">
                M
              </span>
              <span className="font-display text-xl font-semibold tracking-wide text-gradient">
                Midnight Ceramide
              </span>
            </a>
            <p className="text-brand-muted text-sm leading-relaxed max-w-xs mb-6">
              Where luxury fragrance meets skin science. The first perfume that nourishes as deeply as it enchants.
            </p>

            {/* Social icons — scaled to 44x44px touch targets on mobile */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                  className="w-11 h-11 rounded-full glass glow-border flex items-center justify-center text-brand-muted hover:text-brand-accent active:scale-90 transition-transform duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-primary mb-5">
                {group}
              </h3>
              <ul className="flex flex-col gap-2" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-brand-muted hover:text-brand-accent transition-colors duration-200 hover-underline py-1.5 inline-block touch-target"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-purple-900/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted">
            © {year} Midnight Ceramide. All rights reserved.
          </p>
          <p className="text-xs text-brand-muted">
            Crafted with 💜 for skin &amp; soul.
          </p>
        </div>
      </div>
    </footer>
  )
}
