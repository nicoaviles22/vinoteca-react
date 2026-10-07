import { Link, useParams } from 'react-router-dom';
import { productDetails } from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const product = productDetails[Number(id)];

  if (!product) {
    return (
      <section className="not-found">
        <h2>Producto no encontrado</h2>
        <Link className="gold-button" to="/productos">Volver a productos</Link>
      </section>
    );
  }

  return (
    <section className="product-detail">
      <div className="detail-card">
        <img src={product.image} alt={`${product.name} ${product.description}`} />
        <div className="detail-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <Link className="gold-button" to="/productos">Volver a productos</Link>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
