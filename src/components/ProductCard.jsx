function ProductCard({ image, name, price, description }) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img className="product-card__image" src={image} alt={name} />
      </div>

      <div className="product-card__content">
        <div>
          <h3 className="product-card__title">{name}</h3>
          <p className="product-card__description">{description}</p>
        </div>

        <div className="product-card__footer">
          <span className="product-card__price">{price}</span>
          <button className="product-card__button" type="button">
            Order Now
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
