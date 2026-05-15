import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function Products() {
  return (
    <section className="bg-[#f8fbf4] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wider text-farm-green">
            Farm fresh collection
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Bring home fresh dairy essentials and seasonal vegetables directly from trusted local farms.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
