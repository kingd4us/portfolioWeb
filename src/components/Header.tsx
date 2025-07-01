import { useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/30 dark:bg-zinc-900/30 backdrop-blur-lg z-50 border-b border-white/20 dark:border-zinc-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-black text-white px-2 py-1 text-sm font-bold">
              FM
            </div>
            <span className="font-bold text-lg">FIRDAUS MANALU</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              SKILLS
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              WORK
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              CONTACT
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">
              <Download size={16} />
              <span>RESUME</span>
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-zinc-800">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                SKILLS
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                WORK
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                CONTACT
              </button>
              <div className="flex items-center space-x-4 pt-4">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">
                  <Download size={16} />
                  <span>RESUME</span>
                </button>
                <ThemeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header