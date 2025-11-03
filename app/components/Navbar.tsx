'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/buttons', label: 'Buttons' },
    { href: '/cards', label: 'Cards' },
    { href: '/navigation', label: 'Navigation' },
    { href: '/forms', label: 'Forms' },
    { href: '/modules', label: 'Modules' },
  ];

  return (
    <nav className="border-b-4 border-black bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-bold border-4 border-black px-4 py-2 text-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          style={{ backgroundColor: '#005eff' }}
        >
          Neobrutalism
        </Link>
        
        <div className="hidden md:flex space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 border-4 border-black font-medium transition-all ${
                pathname === item.href
                  ? 'text-white'
                  : 'bg-white text-black hover:bg-black hover:text-white'
              }`}
              style={pathname === item.href ? { backgroundColor: '#005eff' } : {}}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button - will implement later */}
        <button className="md:hidden border-4 border-black p-2 bg-white">
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
