import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'Chief Engineer, Tata Power',
      avatar: '/images/testimonials/rajesh-kumar.jpg',
      rating: 5,
      text: "Shree Vishnu Enterprises has been our trusted supplier for power system components for over 5 years. Their quality and service are unmatched in the industry."
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Operations Director, Reliance Industries',
      avatar: '/images/testimonials/priya-sharma.jpg',
      rating: 4.5,
      text: "The energy management solutions from Shree Vishnu have helped us reduce operational costs by 30%. Their technical support team is excellent."
    },
    {
      id: 3,
      name: 'Vijay Malhotra',
      position: 'Technical Director, Adani Power',
      avatar: '/images/testimonials/vijay-malhotra.jpg',
      rating: 5,
      text: "We've implemented smart grid solutions from Shree Vishnu across 3 of our facilities. The ROI has been impressive and the systems are extremely reliable."
    }
  ];
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
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
    <section className="testimonials">
      <div className="products-container">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
        </div>
        
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="testimonial-content">
                <div className="stars">
                  {renderStars(testimonial.rating)}
                </div>
                <p>"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                    />
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonial-navigation">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
