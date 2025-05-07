import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 animated-gradient bg-gradient-to-br from-blue-50 via-teal-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 fade-in">
            <div className="max-w-xl space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 leading-tight">
                Hola, soy<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Pablo Barrera</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
                Ingeniero Civil en Informática
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Con más de 6 años de experiencia creando soluciones digitales a medida para empresas, startups y emprendedores.
              </p>
              <div className="pt-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white rounded-lg shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="font-medium text-lg">Hablemos</span>
                  <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-teal-500 animate-pulse glow"></div>
              <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 animate-gradient">
                  PB
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <a 
            href="#services" 
            className="transform transition-transform hover:translate-y-1 animate-bounce"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} className="text-blue-600 dark:text-blue-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;