function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(31,122,63,0.16),_transparent_46%)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-24">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-farm-green/10 px-4 py-1 text-sm font-semibold text-farm-dark">
            Fresh farm milk & organic produce
          </span>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            GovindaDhara — premium milk delivery for your family
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Fresh cow milk, buffalo milk, farm vegetables, and flexible subscription plans delivered directly from trusted farms.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#subscription"
              className="inline-flex items-center justify-center rounded-full bg-farm-green px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-farm-dark"
            >
              Order Fresh Milk
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full border border-farm-green bg-white px-8 py-3 text-sm font-semibold text-farm-dark transition hover:bg-farm-green/10"
            >
              Explore Products
            </a>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:w-1/2">
          <div className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-farm-green">Dairy selection</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">Fresh Cow Milk</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Cold-delivered daily from local farms, rich flavor and premium nutrition.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-farm-green">Premium product</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">Buffalo Milk & Veggies</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Creamy buffalo milk and crisp vegetables that bring farm freshness to your home.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-farm-green">Subscription plan</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">Daily Delivery</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Choose your milk plan and get fresh delivery every morning without any hassle.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-farm-green">Modern startup</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">Built for growth</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Clean design and responsive layout make your startup feel premium on every device.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
