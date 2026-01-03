
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Education', path: '/education' },
    { name: 'Awards', path: '/awards' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
            <span className="font-bold leading-none">S</span>
          </div>
          <Link to="/" className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            Sabee Ur Rehman
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.path)
                  ? 'text-primary font-bold'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-primary-dark shadow-sm"
            >
              Contact Me
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300"
          >
            <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 animate-fade-in">
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-base font-bold text-white transition-all hover:bg-primary-dark"
            >
              Contact Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
