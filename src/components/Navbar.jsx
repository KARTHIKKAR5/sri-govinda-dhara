function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight text-farm-dark">
          GovindaDhara
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#home" className="hover:text-farm-dark transition">Home</a>
          <a href="#products" className="hover:text-farm-dark transition">Products</a>
          <a href="#subscription" className="hover:text-farm-dark transition">Subscription</a>
          <a href="#about" className="hover:text-farm-dark transition">About</a>
          <a href="#contact" className="hover:text-farm-dark transition">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#login"
            className="hidden rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 md:inline"
          >
            Login
          </a>

          <button className="rounded-full bg-farm-green px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-farm-dark">
            Order Now
          </button>

          <button className="rounded-full border border-slate-300 bg-white px-3 py-2 text-slate-700 transition hover:bg-slate-50 md:hidden">
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
