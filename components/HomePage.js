import React from 'react';
import Layout from '../components/Layout';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import FeatureBox from '../components/FeatureBox';
import TestimonialCard from '../components/TestimonialCard';

const HomePage = () => {
  // Sample data
  const categories = [
    {
      image: 'https://via.placeholder.com/400x300?text=Power+Systems',
      title: 'Power Systems',
      description: 'Complete solutions for reliable power generation, transmission, and distribution systems.'
    },
    {
      image: 'https://via.placeholder.com/400x300?text=Grid+Operations',
      title: 'Grid Operations',
      description: 'Advanced components and systems for efficient and stable electrical grid operations.'
    },
    {
      image: 'https://via.placeholder.com/400x300?text=Energy+Management',
      title: 'Energy Management',
      description: 'Innovative solutions for monitoring, controlling, and optimizing energy consumption.'
    },
    {
      image: 'https://via.placeholder.com/400x300?text=Smart+Grid',
      title: 'Smart Grid Technology',
      description: 'Next-generation solutions for modern, efficient, and intelligent power grids.'
    }
  ];

  const products = [
    {
      image: 'https://via.placeholder.com/400x400?text=Power+Transformer',
      badge: 'Best Seller',
      category: 'Power Systems',
      title: 'High-Efficiency Power Transformer 100KVA',
      rating: 4.5,
      reviewCount: 24,
      currentPrice: 245000,
      oldPrice: 275000
    },
    {
      image: 'https://via.placeholder.com/400x400?text=Grid+Analyzer',
      badge: 'New',
      category: 'Grid Operations',
      title: 'Advanced Grid Performance Analyzer',
      rating: 4,
      reviewCount: 18,
      currentPrice: 135000,
      oldPrice: null
    },
    {
      image: 'https://via.placeholder.com/400x400?text=Energy+Monitor',
      badge: null,
      category: 'Energy Management',
      title: 'Industrial Energy Monitoring System',
      rating: 5,
      reviewCount: 36,
      currentPrice: 87500,
      oldPrice: 95000
    },
    {
      image: 'https://via.placeholder.com/400x400?text=Circuit+Breaker',
      badge: null,
      category: 'Grid Operations',
      title: 'High-Capacity Circuit Breaker System',
      rating: 4.5,
      reviewCount: 29,
      currentPrice: 118000,
      oldPrice: 130000
    }
  ];

  const features = [
    {
      icon: 'fas fa-award',
      title: 'Premium Quality',
      description: 'All our products meet the highest industry standards and are thoroughly tested for reliability.'
    },
    {
      icon: 'fas fa-headset',
      title: 'Expert Support',
      description: 'Our team of power systems specialists is available 24/7 to provide technical assistance.'
    },
    {
      icon: 'fas fa-shipping-fast',
      title: 'Nationwide Delivery',
      description: 'Fast and reliable shipping to all major cities across India with installation services.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Warranty Guaranteed',
      description: 'All products come with comprehensive warranty and after-sales support.'
    }
  ];

  const testimonials = [
    {
      rating: 5,
      text: 'Shree Vishnu Enterprises has been our trusted supplier for power system components for over 5 years. Their quality and service are unmatched in the industry.',
      author: 'Rajesh Kumar',
      title: 'Chief Engineer, Tata Power',
      avatar: 'https://via.placeholder.com/50x50'
    },
    {
      rating: 4.5,
      text: 'The energy management solutions from Shree Vishnu have helped us reduce operational costs by 30%. Their technical support team is excellent.',
      author: 'Priya Sharma',
      title: 'Operations Director, Reliance Industries',
      avatar: 'https://via.placeholder.com/50x50'
    },
    {
      rating: 5,
      text: 'We\'ve implemented smart grid solutions from Shree Vishnu across 3 of our facilities. The ROI has been impressive and the systems are extremely reliable.',
      author: 'Vijay Malhotra',
      title: 'Technical Director, Adani Power',
      avatar: 'https://via.placeholder.com/50x50'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Powering the Future with Reliable Energy Solutions</h1>
          <p>Discover industry-leading power systems, grid operation components, and energy management solutions trusted by professionals worldwide.</p>
          <a href="#" className="cta-button">Explore Products <i className="fas fa-arrow-right"></i></a>
        </div>
      </section>
      
      {/* Featured Categories */}
      <section className="featured-categories">
        <div className="section-title">
          <h2>Featured Solutions</h2>
        </div>
        
        <div className="category-grid">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index}
              image={category.image}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="featured-products">
        <div className="products-container">
          <div className="section-title">
            <h2>Featured Products</h2>
          </div>
          
          <div className="product-grid">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features">
        <div className="section-title">
          <h2>Why Choose Us</h2>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureBox 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="products-container">
          <div className="section-title">
            <h2>What Our Clients Say</h2>
          </div>
          
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                rating={testimonial.rating}
                text={testimonial.text}
                author={testimonial.author}
                title={testimonial.title}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="partners">
        <div className="section-title">
          <h2>Our Partners</h2>
        </div>
        
        <div className="partner-logos">
          <img src="https://via.placeholder.com/180x80?text=Partner+1" alt="Partner Logo" />
          <img src="https://via.placeholder.com/180x80?text=Partner+2" alt="Partner Logo" />
          <img src="https://via.placeholder.com/180x80?text=Partner+3" alt="Partner Logo" />
          <img src="https://via.placeholder.com/180x80?text=Partner+4" alt="Partner Logo" />
          <img src="https://via.placeholder.com/180x80?text=Partner+5" alt="Partner Logo" />
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
