export default function Features() {
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

  return (
    <section className="features">
      <div className="section-title">
        <h2>Why Choose Us</h2>
      </div>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <div className="feature-icon">
              <i className={feature.icon}></i>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
