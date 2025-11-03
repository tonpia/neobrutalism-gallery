import Link from 'next/link';

export default function Home() {
  const componentCategories = [
    {
      href: '/buttons',
      title: 'Buttons',
      description: 'Interactive elements with bold states',
      color: 'bg-primary',
      position: 'translate-x-4 translate-y-4'
    },
    {
      href: '/cards',
      title: 'Cards',
      description: 'Content containers with raw structure',
      color: 'bg-white',
      position: 'translate-x-2 translate-y-2'
    },
    {
      href: '/navigation',
      title: 'Navigation',
      description: 'Wayfinding elements and menus',
      color: 'bg-primary',
      position: 'translate-x-6 translate-y-2'
    },
    {
      href: '/forms',
      title: 'Forms',
      description: 'User input with brutalist styling',
      color: 'bg-white',
      position: 'translate-x-0 translate-y-6'
    },
    {
      href: '/modules',
      title: 'Modules',
      description: 'Complex components and patterns',
      color: 'bg-primary',
      position: 'translate-x-4 translate-y-0'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="border-b-4 border-black py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold border-4 border-black px-8 py-6 bg-white mb-8 inline-block">
            NEOBRUTALISM
          </h1>
          <p className="text-xl md:text-2xl font-mono border-4 border-black px-6 py-4 bg-white max-w-2xl mx-auto">
            Raw, unapologetic expression of structure
          </p>
        </div>
      </section>

      {/* Component Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold border-4 border-black px-6 py-4 bg-white mb-12 inline-block">
            Component Inspiration
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {componentCategories.map((category, index) => (
            <Link
              key={category.href}
              href={category.href}
              className={`group block border-4 border-black p-6 hover:${category.position} hover:shadow-none transition-all duration-200`}
              style={{ 
                backgroundColor: category.color === 'bg-primary' ? '#005eff' : 'white',
                transform: category.position.replace('translate-x-', '').replace('translate-y-', '').split(' ').map(val => `${val}px`).join(' '),
                boxShadow: '4px 4px 0px 0px #000000'
              }}
            >
                <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                <p className="text-lg opacity-90">{category.description}</p>
                <div className="mt-4 text-sm font-mono border-2 border-black px-3 py-1 bg-white inline-block">
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Banner */}
      <div className="fixed bottom-6 right-6">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-4 border-black bg-yellow-300 px-4 py-2 font-mono text-sm rotate-3 hover:rotate-0 transition-transform"
          style={{ boxShadow: '3px 3px 0px 0px #000000' }}
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}
