import { Link } from 'react-router-dom';
import { products } from '../data/products';

function Products() {
  return (
    <section className="products-page">
      <div className="products-grid">
        {products.map((product, index) => (
          <article className="product-card" key={`${product.routeId}-${index}`}>
            <Link to={`/productos/${product.routeId}`} className="product-image-link">
              <img src={product.thumbnail} alt={`${product.name} ${product.description}`} />
            </Link>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <Link className="small-button" to={`/productos/${product.routeId}`}>
              Más info
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;
