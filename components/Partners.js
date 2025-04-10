import Image from 'next/image';

export default function Partners() {
  const partners = [
    { id: 1, name: 'Tata Power', logo: '/images/partners/partner-1.png' },
    { id: 2, name: 'Reliance Industries', logo: '/images/partners/partner-2.png' },
    { id: 3, name: 'Adani Power', logo: '/images/partners/partner-3.png' },
    { id: 4, name: 'NTPC Limited', logo: '/images/partners/partner-4.png' },
    { id: 5, name: 'Power Grid Corporation', logo: '/images/partners/partner-5.png' }
  ];

  return (
    <section className="partners">
      <div className="section-title">
        <h2>Our Partners</h2>
      </div>
      
      <div className="partner-logos">
        {partners.map(partner => (
          <div key={partner.id} className="partner-logo">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={180}
              height={80}
              objectFit="contain"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
            />
          </div>
        ))}
      </div>
    </section>
  );
}
