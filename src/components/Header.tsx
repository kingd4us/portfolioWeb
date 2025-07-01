import React, { useState } from 'react';
import { Download, Menu as MenuIcon, X, LayoutGrid } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScrollTo = (sectionId: string) => {
    navigate('/home', { state: { sectionId } });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/30 dark:bg-zinc-900/30 backdrop-blur-lg z-40 border-b border-white/20 dark:border-zinc-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/home" className="flex items-center space-x-2">
            <div className="bg-black text-white px-2 py-1 text-sm font-bold">FM</div>
            <span className="font-bold text-lg">FIRDAUS MANALU</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleScrollTo('home')} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">HOME</button>
            <button onClick={() => handleScrollTo('about')} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">ABOUT</button>
            <button onClick={() => handleScrollTo('skills')} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">SKILLS</button>
            <button onClick={() => handleScrollTo('work')} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">WORK</button>
            <button onClick={() => handleScrollTo('contact')} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">CONTACT</button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded hover:bg-gray-50 dark:hover:bg-zinc-800">
              <Download size={16} />
              <span>RESUME</span>
            </button>
            <ThemeToggle />
            <Link to="/" className="p-2 border border-gray-300 dark:border-zinc-700 rounded hover:bg-gray-50 dark:hover:bg-zinc-800">
              <LayoutGrid size={16} />
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
             <div className="md:hidden py-4 border-t border-gray-200 dark:border-zinc-800">
                <nav className="flex flex-col space-y-4">
                  <button onClick={() => handleScrollTo('home')} className="text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">HOME</button>
                  <button onClick={() => handleScrollTo('about')} className="text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">ABOUT</button>
                  <button onClick={() => handleScrollTo('skills')} className="text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">SKILLS</button>
                  <button onClick={() => handleScrollTo('work')} className="text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">WORK</button>
                  <button onClick={() => handleScrollTo('contact')} className="text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">CONTACT</button>
                  <div className="flex items-center space-x-4 pt-4">
                      <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded hover:bg-gray-50 dark:hover:bg-zinc-800">
                          <Download size={16} />
                          <span>RESUME</span>
                      </button>
                      <ThemeToggle />
                      <Link to="/" className="p-2 border border-gray-300 dark:border-zinc-700 rounded hover:bg-gray-50 dark:hover:bg-zinc-800">
                          <LayoutGrid size={16} />
                      </Link>
                  </div>
                </nav>
            </div>
        )}
      </div>
    </header>
  );
};

export default Header;