import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      return newMode;
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Services />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;