import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import ThemeToggle from '../ui/theme-toggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'Work', path: '#work' },
    { name: 'Skills', path: '#skills' },
    { name: 'Contact', path: '#contact' }
  ];

  // Lock scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Listen for the hash changes triggered by our App.tsx observer
  useEffect(() => {
    const onHashChange = () => {
      setActiveHash(window.location.hash || '#home');
    };
    
    // Set initial hash on load
    onHashChange();

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Manually set the hash for immediate UI response
      window.history.pushState(null, '', path);
      setActiveHash(path);
    }
  };

  return (
    <header className="sticky top-0 w-full py-6 px-6 border-b-2 border-foreground bg-background z-50 transition-colors duration-500">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        
        <nav className="hidden md:flex space-x-12 text-base uppercase tracking-widest font-semibold">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.path}
              onClick={(e) => handleScroll(e, item.path)}
              className={cn(
                "transition-all duration-300 hover:text-foreground/60 cursor-pointer",
                activeHash === item.path ? "underline decoration-2 underline-offset-8" : "opacity-60"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:ml-0 ml-auto">
          <ThemeToggle />
          <button 
            className="md:hidden p-2 border-2 border-transparent hover:border-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-background border-b-2 border-foreground md:hidden flex flex-col px-6 py-8 shadow-xl"
          >
            <nav className="flex flex-col space-y-6 text-xl uppercase tracking-widest font-bold text-center">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleScroll(e, item.path)}
                  className={cn(
                    "transition-all duration-300 hover:text-foreground/60 py-2 cursor-pointer",
                    activeHash === item.path ? "underline decoration-2 underline-offset-8" : "opacity-60"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}