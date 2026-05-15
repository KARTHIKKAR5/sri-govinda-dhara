import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Button from './Button'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  // This state controls whether the mobile menu is open or closed.
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const getNavLinkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
      isActive
        ? 'bg-farm-green text-white shadow-sm'
        : 'text-slate-600 hover:bg-farm-light hover:text-farm-dark'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-farm-green text-lg font-bold text-white shadow-soft">
              GD
            </span>
            <span>
              <span className="block text-lg font-bold tracking-tight text-farm-dark">
                Govinda Dhara
              </span>
              <span className="text-xs font-medium text-slate-500">Farm fresh daily</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={getNavLinkClass}>
                {link.name}
              </NavLink>
            ))}
            <Button to="/login" className="ml-2">
              Login
            </Button>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-100 text-farm-dark transition hover:bg-farm-light md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="grid gap-1">
              <span className={`h-0.5 w-5 rounded bg-current transition ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`h-0.5 w-5 rounded bg-current transition ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-5 rounded bg-current transition ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="grid gap-2 border-t border-emerald-100 py-4 md:hidden">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={getNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <Button to="/login" className="mt-2" onClick={() => setIsMenuOpen(false)}>
              Login
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar
