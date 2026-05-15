import { Link } from 'react-router-dom'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]

const socialLinks = ['Fb', 'Ig', 'In']

function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-farm-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-xl font-bold">Govinda Dhara</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-emerald-100">
            Fresh milk, dairy essentials, and farm produce delivered with care.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-200">
            Quick Links
          </h3>
          <div className="mt-4 grid gap-2 text-sm text-emerald-50">
            {quickLinks.map((link) => (
              <Link key={link.name} to={link.path} className="transition hover:text-white">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-200">
            Social
          </h3>
          <div className="mt-4 flex gap-3">
            {socialLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-white hover:text-farm-dark"
                aria-label={`${item} social link`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-emerald-100">
        Copyright 2026 Govinda Dhara. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
