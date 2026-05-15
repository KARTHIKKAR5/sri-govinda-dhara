function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="bg-gradient-to-br from-farm-light via-white to-emerald-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-farm-green">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
          {description}
        </p>
      </div>
    </section>
  )
}

export default PageHeader
