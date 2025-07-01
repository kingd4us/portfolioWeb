import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutGrid } from 'lucide-react';
import { motion } from 'framer-motion';

const SideNav = () => {
  const navigate = useNavigate();

  const sections = ['home', 'about', 'skills', 'work', 'contact'];

  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center space-y-4"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <button 
        onClick={() => navigate('/')} 
        className="p-3 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full border border-gray-200 dark:border-zinc-800"
        aria-label="Open Menu"
      >
        <LayoutGrid size={20} />
      </button>
      <div className="flex flex-col items-center space-y-3">
        {sections.map(section => (
          <button 
            key={section} 
            onClick={() => handleScrollTo(section)}
            className="w-2 h-2 bg-gray-400 rounded-full hover:bg-black dark:hover:bg-white transition-colors"
            aria-label={`Scroll to ${section}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SideNav;