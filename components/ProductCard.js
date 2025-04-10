import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half-star" className="fas fa-star-half-alt"></i>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }
    
    return stars;
  };
  
  return (
    <div className="product-card">
      <div className="product-image">
        <Link href={`/product/${product.id}`}>
          <a>
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              objectFit="cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
            />
          </a>
        </Link>
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <div className="product-actions">
          <button className="product-action" title="Add to wishlist">
            <i className="far fa-heart"></i>
          </button>
          <button className="product-action" title="Compare">
            <i className="fas fa-exchange-alt"></i>
          </button>
          <Link href={`/product/${product.id}`}>
            <a className="product-action" title="Quick view">
              <i className="far fa-eye"></i>
            </a>
          </Link>
        </div>
      </div>
      <div className="product-content">
        <div className="product-category">{product.category}</div>
        <h3 className="product-title">
          <Link href={`/product/${product.id}`}>
            <a>{product.title}</a>
          </Link>
        </h3>
        <div className="product-rating">
          <div className="stars">
            {renderStars(product.rating)}
          </div>
          <span className="rating-count">({product.reviews})</span>
        </div>
        <div className="product-price">
          <span className="current-price">₹{product.price.toLocaleString()}</span>
          {product.oldPrice && (
            <span className="old-price">₹{product.oldPrice.toLocaleString()}</span>
          )}
        </div>
        <button 
          className="add-to-cart"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
