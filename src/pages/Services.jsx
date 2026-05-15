import Button from '../components/Button'
import PageHeader from '../components/PageHeader'

const services = [
  'Daily milk subscription',
  'Buffalo milk delivery',
  'Seasonal vegetable basket',
  'Custom family plans',
]

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Choose the delivery plan that fits your home"
        description="Start with milk, add farm vegetables, and adjust your subscription whenever your family needs change."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-lg border border-emerald-100 bg-white p-7 shadow-lg shadow-emerald-950/5 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <h2 className="text-2xl font-bold text-slate-900">{service}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Fresh, flexible, and designed for busy households that want dependable farm products.
              </p>
              <Button to="/login" className="mt-6">
                Start Plan
              </Button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Services
