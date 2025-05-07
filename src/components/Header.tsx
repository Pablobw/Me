import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Tecnologías', href: '#technologies' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-blue-900 dark:text-blue-400 transition-colors">
            Pablo<span className="text-teal-600 dark:text-teal-400">Barrera</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <button
              onClick={toggleMenu}
              className="ml-4 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;