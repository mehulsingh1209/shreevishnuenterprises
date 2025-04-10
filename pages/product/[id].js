// File: pages/product/[id].js
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FeaturedProducts from '../../components/FeaturedProducts';
import { useCart } from '../../context/CartContext';

export default function ProductDetails({ product, relatedProducts }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);
  
  // If the page is being statically generated with fallback: true
  if (router.isFallback) {
    return <div className="loading">Loading...</div>;
  }
  
  // If product does not exist
  if (!product) {
    return (
      <div className="not-found">
        <h1>Product Not Found</h1>
        <p>The product you are looking for doesn't exist or has been removed.</p>
        <Link href="/products">
          <a className="back-button">Back to Products</a>
        </Link>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    router.push('/cart');
  };
  
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
    <div>
      <Head>
        <title>{product.title} | Shree Vishnu Enterprises</title>
        <meta name="description" content={product.description.substring(0, 160)} />
      </Head>
      
      <Header />
      
      <main className="product-details-page">
        <div className="breadcrumbs">
          <div className="container">
            <ul>
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/products"><a>Products</a></Link></li>
              <li><Link href={`/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`}>
                <a>{product.category}</a>
              </Link></li>
              <li className="active">{product.title}</li>
            </ul>
          </div>
        </div>
        
        <section className="product-details">
          <div className="container">
            <div className="product-layout">
              <div className="product-images">
                <div className="main-image">
                  <Image
                    src={product.images ? product.images[selectedImage] : product.image}
                    alt={product.title}
                    width={600}
                    height={600}
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                  />
                </div>
                
                {product.images && product.images.length > 1 && (
                  <div className="thumbnail-gallery">
                    {product.images.map((image, index) => (
                      <div 
                        key={index} 
                        className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                        onClick={() => setSelectedImage(index)}
                      >
                        <Image
                          src={image}
                          alt={`${product.title} - Image ${index + 1}`}
                          width={100}
                          height={100}
                          objectFit="cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="product-info">
                <h1 className="product-title">{product.title}</h1>
                
                <div className="product-meta">
                  <div className="product-rating">
                    <div className="stars">
                      {renderStars(product.rating)}
                    </div>
                    <span className="rating-count">({product.reviews} reviews)</span>
                  </div>
                  
                  <div className="product-sku">
                    <span>SKU:</span> {product.id.toUpperCase()}
                  </div>
                  
                  <div className="product-availability">
                    <span>Availability:</span>
                    {product.stock > 0 ? (
                      <span className="in-stock">In Stock ({product.stock} units)</span>
                    ) : (
                      <span className="out-of-stock">Out of Stock</span>
                    )}
                  </div>
                </div>
                
                <div className="product-price-block">
                  {product.oldPrice && (
                    <span className="old-price">₹{product.oldPrice.toLocaleString()}</span>
                  )}
                  <span className="current-price">₹{product.price.toLocaleString()}</span>
                  
                  {product.oldPrice && (
                    <span className="discount-percentage">
                      {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% Off
                    </span>
                  )}
                </div>
                
                <div className="product-description-short">
                  <p>{product.description.substring(0, 200)}...</p>
                </div>
                
                <div className="product-actions">
                  <div className="quantity-selector">
                    <button 
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      className="quantity-btn"
                      disabled={quantity <= 1}
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <input 
                      type="number" 
                      min="1" 
                      max={product.stock} 
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      className="quantity-input"
                    />
                    <button 
                      onClick={() => quantity < product.stock && setQuantity(quantity + 1)}
                      className="quantity-btn"
                      disabled={quantity >= product.stock}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  
                  <button 
                    className="add-to-cart-btn"
                    onClick={handleAddToCart}
                    disabled={product.stock <= 0}
                  >
                    <i className="fas fa-shopping-cart"></i>
                    Add to Cart
                  </button>
                  
                  <button className="wishlist-btn">
                    <i className="far fa-heart"></i>
                    Add to Wishlist
                  </button>
                </div>
                
                <div className="product-additional-info">
                  <div className="share-buttons">
                    <span>Share:</span>
                    <a href="#" className="social-share"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-share"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-share"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" className="social-share"><i className="fab fa-whatsapp"></i></a>
                  </div>
                  
                  <div className="delivery-info">
                    <i className="fas fa-truck"></i>
                    <span>Free delivery for orders over ₹50,000 in select locations</span>
                  </div>
                  
                  <div className="payment-info">
                    <i className="fas fa-credit-card"></i>
                    <span>Secure payment. Multiple payment options available</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="product-tabs">
              <div className="tabs-navigation">
                <button 
                  className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button 
                  className={`tab-button ${activeTab === 'specifications' ? 'active' : ''}`}
                  onClick={() => setActiveTab('specifications')}
                >
                  Specifications
                </button>
                <button 
                  className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews ({product.reviews})
                </button>
              </div>
              
              <div className="tab-content">
                {activeTab === 'description' && (
                  <div className="tab-pane description">
                    <h3>Product Description</h3>
                    <p>{product.description}</p>
                    
                    {product.features && (
                      <div className="product-features">
                        <h4>Key Features</h4>
                        <ul>
                          {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === 'specifications' && (
                  <div className="tab-pane specifications">
                    <h3>Technical Specifications</h3>
                    <table className="specs-table">
                      <tbody>
                        {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                          <tr key={key}>
                            <th>{key}</th>
                            <td>{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                
                {activeTab === 'reviews' && (
                  <div className="tab-pane reviews">
                    <h3>Customer Reviews</h3>
                    <div className="reviews-summary">
                      <div className="average-rating">
                        <div className="rating-number">{product.rating.toFixed(1)}</div>
                        <div className="stars">
                          {renderStars(product.rating)}
                        </div>
                        <div className="total-reviews">Based on {product.reviews} reviews</div>
                      </div>
                      
                      <div className="rating-breakdown">
                        {/* This would be populated with actual review data */}
                        <div className="rating-bar">
                          <span className="rating-label">5 Star</span>
                          <div className="progress-bar">
                            <div className="progress" style={{ width: '70%' }}></div>
                          </div>
                          <span className="rating-count">16</span>
                        </div>
                        <div className="rating-bar">
                          <span className="rating-label">4 Star</span>
                          <div className="progress-bar">
                            <div className="progress" style={{ width: '20%' }}></div>
                          </div>
                          <span className="rating-count">5</span>
                        </div>
                        <div className="rating-bar">
                          <span className="rating-label">3 Star</span>
                          <div className="progress-bar">
                            <div className="progress" style={{ width: '10%' }}></div>
                          </div>
                          <span className="rating-count">2</span>
                        </div>
                        <div className="rating-bar">
                          <span className="rating-label">2 Star</span>
                          <div className="progress-bar">
                            <div className="progress" style={{ width: '0%' }}></div>
                          </div>
                          <span className="rating-count">0</span>
                        </div>
                        <div className="rating-bar">
                          <span className="rating-label">1 Star</span>
                          <div className="progress-bar">
                            <div className="progress" style={{ width: '0%' }}></div>
                          </div>
                          <span className="rating-count">0</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="write-review-btn">
                      <i className="fas fa-pen"></i> Write a Review
                    </button>
                    
                    <div className="customer-reviews">
                      {/* This would be populated with actual review data */}
                      <div className="review-item">
                        <div className="reviewer-info">
                          <div className="reviewer-avatar">
                            <Image
                              src="/images/avatars/user1.jpg"
                              alt="Customer"
                              width={50}
                              height={50}
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <div className="reviewer-name">Anil Patel</div>
                            <div className="review-date">Verified Purchase - March 15, 2025</div>
                          </div>
                        </div>
                        <div className="review-content">
                          <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <h4 className="review-title">Excellent performance and reliability</h4>
                          <p className="review-text">
                            We installed this system in our manufacturing plant and have seen significant improvement in power stability. 
                            The energy efficiency is exactly as advertised and the technical support team was very helpful during installation.
                          </p>
                        </div>
                      </div>
                      
                      <div className="review-item">
                        <div className="reviewer-info">
                          <div className="reviewer-avatar">
                            <Image
                              src="/images/avatars/user2.jpg"
                              alt="Customer"
                              width={50}
                              height={50}
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <div className="reviewer-name">Sanjay Mehta</div>
                            <div className="review-date">Verified Purchase - February 22, 2025</div>
                          </div>
                        </div>
                        <div className="review-content">
                          <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                          </div>
                          <h4 className="review-title">Good product, could improve documentation</h4>
                          <p className="review-text">
                            The product itself is excellent, but the installation documentation could be more comprehensive. 
                            Once set up, it has been running flawlessly for our commercial building.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        <section className="related-products">
          <div className="container">
            <div className="section-title">
              <h2>Related Products</h2>
            </div>
            
            <FeaturedProducts products={relatedProducts} />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  // This would typically fetch all product IDs from an API or database
  const res = await fetch(`${process.env.API_URL || 'http://localhost:3000'}/api/products`);
  const products = await res.json();
  
  const paths = products.map(product => ({
    params: { id: product.id }
  }));
  
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  // Fetch product details
  const res = await fetch(`${process.env.API_URL || 'http://localhost:3000'}/api/products/${params.id}`);
  const product = await res.json();
  
  if (!product) {
    return {
      notFound: true
    };
  }
  
  // Fetch related products
  const relatedRes = await fetch(
    `${process.env.API_URL || 'http://localhost:3000'}/api/products?category=${product.category}&limit=4`
  );
  const relatedProducts = await relatedRes.json();
  
  // Filter out the current product from related products
  const filteredRelatedProducts = relatedProducts.filter(p => p.id !== product.id);
  
  return {
    props: {
      product,
      relatedProducts: filteredRelatedProducts
    },
    revalidate: 60 // Revalidate every 60 seconds
  };
}

// File: pages/api/products/[id].js
export default function handler(req, res) {
  // This would typically fetch from a database
  const products = [
    {
      id: 'power-transformer-100kva',
      title: 'High-Efficiency Power Transformer 100KVA',
      category: 'Power Systems',
      price: 245000,
      oldPrice: 275000,
      rating: 4.5,
      reviews: 24,
      image: '/images/power-transformer.jpg',
      badge: 'Best Seller',
      description: 'High-Efficiency Power Transformer 100KVA designed for optimal energy conversion with minimal losses. Built with premium materials and advanced technology for reliable operation in demanding environments.',
      features: [
        'Energy efficiency rating: 98.5%',
        'Low-noise operation',
        'Built-in thermal protection',
        'Advanced cooling system',
        'Robust metal casing for enhanced protection'
      ],
      specifications: {
        'Power Rating': '100 KVA',
        'Input Voltage': '11 kV',
        'Output Voltage': '440V',
        'Frequency': '50 Hz',
        'Cooling Method': 'ONAN (Oil Natural Air Natural)',
        'Dimensions': '1200 x 900 x 1500 mm',
        'Weight': '1200 kg'
      },
      stock: 15,
      images: [
        '/images/power-transformer.jpg',
        '/images/power-transformer-2.jpg',
        '/images/power-transformer-3.jpg'
      ]
    },
    // Other products...
  ];
  
  const { id } = req.query;
  
  if (req.method === 'GET') {
    const product = products.find(p => p.id === id);
    
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
