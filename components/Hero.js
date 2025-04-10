import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Powering the Future with Reliable Energy Solutions</h1>
        <p>Discover industry-leading power systems, grid operation components, and energy management solutions trusted by professionals worldwide.</p>
        <Link href="/products">
          <a className="cta-button">Explore Products <i className="fas fa-arrow-right"></i></a>
        </Link>
      </div>
    </section>
  );
}
