import { PortfolioPage } from '@/components/portfolio-page';

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Arlindo Orsini',
    url: 'https://aarleyzin.dev',
    jobTitle: 'Software Engineer',
    sameAs: [
      'https://github.com/Aarleyzin',
      'https://www.linkedin.com/in/aarleyzin/',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PortfolioPage />
    </>
  );
}
