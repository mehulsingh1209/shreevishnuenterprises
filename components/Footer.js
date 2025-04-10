import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here you would implement the subscription logic
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };
  
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Shree Vishnu Enterprises has been a trusted provider of power systems and energy management solutions for over 25 years, serving industries across India.</p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-link" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/shree-vishnu-enterprises/?viewAsMember=true" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social-link" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        
        <div className="footer-column">
          <h3>Products</h3>
          <ul className="footer-links">
            <li><Link href="/products/power-systems"><a>Power Systems</a></Link></li>
            <li><Link href="/products/grid-components"><a>Grid Components</a></Link></li>
            <li><Link href="/products/energy-management"><a>Energy Management</a></Link></li>
            <li><Link href="/products/smart-grid"><a>Smart Grid Solutions</a></Link></li>
            <li><Link href="/products/automation"><a>Automation Systems</a></Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link href="/about"><a>About Us</a></Link></li>
            <li><Link href="/services"><a>Services</a></Link></li>
            <li><Link href="/projects"><a>Projects</a></Link></li>
            <li><Link href="/blog"><a>Blog</a></Link></li>
            <li><Link href="/contact"><a>Contact Us</a></Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <i className="fas fa-map-marker-alt"></i>
            <span>Panitanki Ward Number 8, Narayani Zone, Province 2<br />Birgunj, Nepal</span>
          </div>
          <div className="contact-info">
            <i className="fas fa-phone-alt"></i>
            <span>+977 9702745968</span>
          </div>
          <div className="contact-info">
            <i className="fas fa-envelope"></i>
            <span>info@shreevishnu.com</span>
          </div>
        </div>
        
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates on products and offers.</p>
          <form className="newsletter" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Your Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="bottom-footer">
        <div className="bottom-footer-content">
          <div className="copyright">
            &copy; 2025 Shree Vishnu Enterprises. All Rights Reserved.
          </div>
          <div className="payment-methods">
            <Image
              src="/images/payment-methods.png"
              alt="Payment Methods"
              width={200}
              height={30}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
