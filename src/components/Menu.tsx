import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail, Download, Clock, Github, Linkedin } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { useTheme } from './theme-provider';

const Menu = () => {
  const [time, setTime] = useState('');
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleNavigate = (sectionId: string) => {
    navigate('/home', { state: { sectionId } });
  };

  const handleNavigateToWork = () => {
    navigate('/work');
  };
  
  useEffect(() => {
    // ... (time fetching logic remains the same)
  }, []);

  const menuItems = [
    { name: 'Home', icon: <Home size={32} />, action: () => handleNavigate('home') },
    { name: 'About', icon: <User size={32} />, action: () => handleNavigate('about') },
    { name: 'Skills', icon: <Code size={32} />, action: () => handleNavigate('skills') },
    { name: 'Work', icon: <Briefcase size={32} />, action: () => handleNavigate('work') },
    { name: 'Title', nameComponent: <h1 className="text-6xl font-bold text-black dark:text-white">FM</h1> },
    { name: 'Contact', icon: <Mail size={32} />, action: () => handleNavigate('contact') },
    { name: 'Resume', icon: <Download size={32} />, action: () => {} /* Add resume link */ },
    { name: 'Theme', icon: <ThemeToggle /> },
    { name: 'Projects', icon: <Briefcase size={32}/>, action: handleNavigateToWork },
  ];
  
  const gridOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const lightBg = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`;
  const darkBg = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-[#0a0a0a] text-black dark:text-gray-300"
      style={{ backgroundImage: theme === 'dark' ? darkBg : lightBg }}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{
        visible: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.05 } },
        hidden: { opacity: 0 },
        exit: { opacity: 0, transition: { duration: 0.5, when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1 } }
      }}
    >
      <motion.div variants={{hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 }}} className="absolute top-8 left-8 text-left">
        <h2 className="text-xl font-bold text-black dark:text-white">FM</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Creative Technologist</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-3 w-full max-w-4xl h-[500px]"
        variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
      >
        {gridOrder.map(i => {
          const item = menuItems[i];
          return (
            <motion.div
              key={item.name}
              variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.5 } }}
              whileHover={{ scale: 1.05, backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)', zIndex: 1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center border border-gray-200 dark:border-gray-800"
            >
              {item.action ? (
                <button onClick={item.action} className="flex flex-col items-center justify-center w-full h-full space-y-3 text-base font-medium">
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              ) : (
                <div className="flex flex-col items-center justify-center w-full h-full space-y-3 text-base font-medium">
                  {item.icon}
                  {item.nameComponent || <span>{item.name}</span>}
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div variants={{hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }}} className="absolute bottom-8 right-8 flex space-x-6 text-black dark:text-white">
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-400"><Github size={24} /></a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-400"><Linkedin size={24} /></a>
        <a href="mailto:firdaus.manalu@email.com" className="hover:text-gray-600 dark:hover:text-gray-400"><Mail size={24} /></a>
      </motion.div>
    </motion.div>
  );
};

export default Menu;