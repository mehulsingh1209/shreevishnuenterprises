import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header>
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="top-bar-contact">
            <span><i className="fas fa-phone-alt"></i> +977 9702745968</span>
            <span><i className="fas fa-envelope"></i> info@shreevishnu.com</span>
          </div>
          <div className="top-bar-links">
            <Link href="/store-locator">
              <a><i className="fas fa-map-marker-alt"></i> Find Store</a>
            </Link>
            <Link href="/order-tracking">
              <a><i className="fas fa-truck"></i> Track Order</a>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="main-header">
        <div className="logo">
          <Link href="/">
            <a>
              <Image 
                src="/images/logo.png" 
                alt="Shree Vishnu Enterprises Logo"
                width={200}
                height={60}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
              />
            </a>
          </Link>
        </div>
        
        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Search for power systems, grid components, energy solutions..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit"><i className="fas fa-search"></i></button>
          </form>
        </div>
        
        <div className="header-actions">
          <Link href="/account">
            <a className="header-action">
              <i className="fas fa-user"></i>
              <span>Account</span>
            </a>
          </Link>
          <Link href="/wishlist">
            <a className="header-action">
              <i className="fas fa-heart"></i>
              <span>Wishlist</span>
            </a>
          </Link>
          <Link href="/cart">
            <a className="header-action" style={{ position: 'relative' }}>
              <i className="fas fa-shopping-cart"></i>
              <span>Cart</span>
              <span className="cart-count">3</span>
            </a>
          </Link>
        </div>
      </div>
      
      <nav>
        <div className="nav-container">
          <div 
            className="category-dropdown"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-th-large"></i> All Categories
            {isMenuOpen && (
              <div className="dropdown-menu">
                <Link href="/category/power-systems"><a>Power Systems</a></Link>
                <Link href="/category/grid-operations"><a>Grid Operations</a></Link>
                <Link href="/category/energy-management"><a>Energy Management</a></Link>
                <Link href="/category/smart-grid"><a>Smart Grid Technology</a></Link>
                <Link href="/category/automation"><a>Automation Systems</a></Link>
              </div>
            )}
          </div>
          
          <ul className="main-menu">
            <li><Link href="/power-systems"><a>Power Systems</a></Link></li>
            <li><Link href="/grid-operations"><a>Grid Operations</a></Link></li>
            <li><Link href="/energy-management"><a>Energy Management</a></Link></li>
            <li><Link href="/automation-solutions"><a>Automation Solutions</a></Link></li>
            <li><Link href="/technical-support"><a>Technical Support</a></Link></li>
            <li><Link href="/resources"><a>Resources</a></Link></li>
            <li><Link href="/contact"><a>Contact Us</a></Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
