import Button from '../components/Button'

function NotFound() {
  return (
    <section className="grid min-h-[620px] place-items-center bg-gradient-to-br from-farm-light via-white to-emerald-50 px-4 text-center">
      <div className="max-w-xl">
        <p className="text-7xl font-black text-farm-green">404</p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Button to="/" className="mt-8">
          Back to Home
        </Button>
      </div>
    </section>
  )
}

export default NotFound
