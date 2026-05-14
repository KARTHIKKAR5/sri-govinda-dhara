import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function Products() {
  return (
    <section className="products-section" id="products">
      <div className="products-section__container">
        <div className="products-section__header">
          <span className="products-section__eyebrow">Farm fresh collection</span>
          <h2 className="products-section__title">Our Products</h2>
          <p className="products-section__text">
            Bring home fresh dairy essentials and seasonal vegetables directly from
            trusted local farms.
          </p>
        </div>

        <div className="products-grid">
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
