import Button from '../components/Button'
import PageHeader from '../components/PageHeader'

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We would love to hear from you"
        description="Have a question about delivery areas, subscriptions, or product freshness? Send us a message."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg bg-farm-dark p-8 text-white shadow-soft">
            <h2 className="text-2xl font-bold">Contact Details</h2>
            <p className="mt-4 text-sm leading-6 text-emerald-100">
              Email: hello@govindadhara.com
              <br />
              Phone: +91 98765 43210
              <br />
              Location: Local farm delivery network
            </p>
          </div>

          <form className="rounded-lg border border-emerald-100 bg-white p-8 shadow-lg shadow-emerald-950/5">
            <div className="grid gap-5">
              <input
                className="rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-farm-green focus:ring-4 focus:ring-emerald-100"
                placeholder="Your name"
              />
              <input
                className="rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-farm-green focus:ring-4 focus:ring-emerald-100"
                placeholder="Email address"
              />
              <textarea
                className="min-h-32 rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-farm-green focus:ring-4 focus:ring-emerald-100"
                placeholder="Message"
              />
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
