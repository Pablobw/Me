import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-blue-400">
              Pablo<span className="text-teal-400">Barrera</span>
            </a>
          </div>
          <div>
            <p className="text-sm">
              &copy; {currentYear} Pablo Barrera. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;