import Button from './Button'

function ProductCard({ image, name, price, description }) {
  return (
    <article className="flex overflow-hidden rounded-lg border border-emerald-100 bg-white shadow-lg shadow-emerald-950/5 transition duration-200 hover:-translate-y-1 hover:shadow-soft">
      <div className="flex w-full flex-col">
        <div className="h-52 overflow-hidden bg-farm-light">
          <img
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
            src={image}
            alt={name}
          />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-6 p-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{name}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-extrabold text-farm-green">{price}</span>
            <Button className="px-5 py-2.5">Order Now</Button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
