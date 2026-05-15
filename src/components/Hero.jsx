import { Link } from 'react-router-dom'
import Button from './Button'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(31,122,63,0.16),_transparent_46%)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-farm-green/10 px-4 py-1 text-sm font-semibold text-farm-dark">
            Fresh farm milk and organic produce
          </span>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Govinda Dhara delivers premium milk for your family
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Fresh cow milk, buffalo milk, farm vegetables, and flexible subscription plans delivered directly from trusted farms.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button to="/services">Order Fresh Milk</Button>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full border border-farm-green bg-white px-8 py-3 text-sm font-semibold text-farm-dark transition hover:bg-farm-green/10"
            >
              Learn About Us
            </Link>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:w-1/2">
          {[
            ['Dairy selection', 'Fresh Cow Milk', 'Cold-delivered daily from local farms, rich flavor and premium nutrition.'],
            ['Premium product', 'Buffalo Milk and Veggies', 'Creamy buffalo milk and crisp vegetables that bring farm freshness to your home.'],
            ['Subscription plan', 'Daily Delivery', 'Choose your milk plan and get fresh delivery every morning without any hassle.'],
            ['Modern startup', 'Built for growth', 'Clean design and responsive layout make your startup feel premium on every device.'],
          ].map(([eyebrow, title, text]) => (
            <div
              key={title}
              className="rounded-lg bg-white p-6 shadow-soft ring-1 ring-slate-200 transition hover:-translate-y-1"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-farm-green">
                {eyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
