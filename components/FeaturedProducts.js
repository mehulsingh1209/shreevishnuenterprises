import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function FeaturedProducts({ products }) {
  // If products are not passed as props, use default showcase products
  const featuredProducts = products || [
    {
      id: 'power-transformer-100kva',
      title: 'High-Efficiency Power Transformer 100KVA',
      category: 'Power Systems',
      price: 245000,
      oldPrice: 275000,
      rating: 4.5,
      reviews: 24,
      image: '/images/power-transformer.jpg',
      badge: 'Best Seller'
    },
    {
      id: 'grid-analyzer',
      title: 'Advanced Grid Performance Analyzer',
      category: 'Grid Operations',
      price: 135000,
      rating: 4.0,
      reviews: 18,
      image: '/images/grid-analyzer.jpg',
      badge: 'New'
    },
    {
      id: 'energy-monitor',
      title: 'Industrial Energy Monitoring System',
      category: 'Energy Management',
      price: 87500,
      oldPrice: 95000,
      rating: 5.0,
      reviews: 36,
      image: '/images/energy-monitor.jpg'
    },
    {
      id: 'circuit-breaker',
      title: 'High-Capacity Circuit Breaker System',
      category: 'Grid Operations',
      price: 118000,
      oldPrice: 130000,
      rating: 4.5,
      reviews: 29,
      image: '/images/circuit-breaker.jpg'
    }
  ];
  
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
    <section className="featured-products">
      <div className="products-container">
        <div className="section-title">
          <h2>Featured Products</h2>
        </div>
        
        <div className="product-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                />
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
          ))}
        </div>
      </div>
    </section>
  );
}
