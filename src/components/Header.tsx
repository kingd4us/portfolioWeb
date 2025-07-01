import React, { useState } from 'react'
import { Download, Menu, X, LayoutGrid } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({ openMenu }: { openMenu: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate();

  const handleScroll = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/30 dark:bg-zinc-900/30 backdrop-blur-lg z-40 border-b border-white/20 dark:border-zinc-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-black text-white px-2 py-1 text-sm font-bold">
              FM
            </div>
            <span className="font-bold text-lg">FIRDAUS MANALU</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleScroll('home')} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">HOME</button>
            <button onClick={() => handleScroll('about')} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">ABOUT</button>
            <button onClick={() => handleScroll('skills')} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">SKILLS</button>
            <button onClick={() => handleScroll('work')} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">WORK</button>
            <button onClick={() => handleScroll('contact')} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">CONTACT</button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">
              <Download size={16} />
              <span>RESUME</span>
            </button>
            <ThemeToggle />
            <button onClick={openMenu} className="p-2 border border-gray-300 dark:border-zinc-700 rounded hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">
              <LayoutGrid size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-zinc-800">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => handleScroll('home')} className="text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">HOME</button>
              <button onClick={() => handleScroll('about')} className="text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">ABOUT</button>
              <button onClick={() => handleScroll('skills')} className="text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">SKILLS</button>
              <button onClick={() => handleScroll('work')} className="text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">WORK</button>
              <button onClick={() => handleScroll('contact')} className="text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">CONTACT</button>
              <div className="flex items-center space-x-4 pt-4">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">
                  <Download size={16} />
                  <span>RESUME</span>
                </button>
                <ThemeToggle />
                <button onClick={openMenu} className="p-2 border border-gray-300 dark:border-zinc-700 rounded hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">
                    <LayoutGrid size={16} />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header