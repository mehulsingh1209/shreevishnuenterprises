import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedCategories() {
  const categories = [
    {
      id: 'power-systems',
      title: 'Power Systems',
      description: 'Complete solutions for reliable power generation, transmission, and distribution systems.',
      image: '/images/power-systems.jpg'
    },
    {
      id: 'grid-operations',
      title: 'Grid Operations',
      description: 'Advanced components and systems for efficient and stable electrical grid operations.',
      image: '/images/grid-operations.jpg'
    },
    {
      id: 'energy-management',
      title: 'Energy Management',
      description: 'Innovative solutions for monitoring, controlling, and optimizing energy consumption.',
      image: '/images/energy-management.jpg'
    },
    {
      id: 'smart-grid',
      title: 'Smart Grid Technology',
      description: 'Next-generation solutions for modern, efficient, and intelligent power grids.',
      image: '/images/smart-grid.jpg'
    }
  ];

  return (
    <section className="featured-categories">
      <div className="section-title">
        <h2>Featured Solutions</h2>
      </div>
      
      <div className="category-grid">
        {categories.map(category => (
          <div key={category.id} className="category-card">
            <div className="category-image">
              <Image
                src={category.image}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
              />
            </div>
            <div className="category-content">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <Link href={`/category/${category.id}`}>
                <a className="browse-link">Browse Products <i className="fas fa-angle-right"></i></a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
