import PageHeader from '../components/PageHeader'

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Freshness with a farmer-first promise"
        description="Govinda Dhara connects families with trusted farms through clean sourcing, careful handling, and dependable daily delivery."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {['Clean sourcing', 'Daily freshness', 'Family trust'].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-emerald-100 bg-white p-6 shadow-lg shadow-emerald-950/5"
            >
              <h2 className="text-xl font-bold text-slate-900">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We keep every step simple, transparent, and focused on delivering better food to your home.
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default About
