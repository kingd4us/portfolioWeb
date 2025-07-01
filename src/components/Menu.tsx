import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail, Download, Clock, X, Github, Linkedin } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { useTheme } from './theme-provider'; // Import useTheme to check the current theme

const Menu = ({ closeMenu }: { closeMenu: () => void }) => {
  const [time, setTime] = useState('');
  const navigate = useNavigate();
  const { theme } = useTheme(); // Get the current theme

  const handleNavigate = (path: string, sectionId?: string) => {
    closeMenu();
    if (sectionId) {
      if (window.location.pathname === '/') {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(path);
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else {
      navigate(path);
    }
  };

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch('http://worldtimeapi.org/api/ip');
        const data = await response.json();
        const initialTime = new Date(data.datetime);
        
        const interval = setInterval(() => {
          initialTime.setSeconds(initialTime.getSeconds() + 1);
          const hours = String(initialTime.getHours()).padStart(2, '0');
          const minutes = String(initialTime.getMinutes()).padStart(2, '0');
          setTime(`${hours}:${minutes}`);
        }, 1000);

        return () => clearInterval(interval);
      } catch (error) {
        console.error("Failed to fetch time:", error);
        setTime("N/A");
      }
    };
    fetchTime();
  }, []);

  const menuItems = [
    { name: 'Home', icon: <Home size={32} />, action: () => handleNavigate('/') },
    { name: 'About', icon: <User size={32} />, action: () => handleNavigate('/', 'about') },
    { name: 'Skills', icon: <Code size={32} />, action: () => handleNavigate('/', 'skills') },
    { name: 'Work', icon: <Briefcase size={32} />, action: () => handleNavigate('/work') },
    { name: 'Title', nameComponent: <h1 className="text-6xl font-bold text-black dark:text-white">FM</h1> },
    { name: 'Contact', icon: <Mail size={32} />, action: () => handleNavigate('/', 'contact') },
    { name: 'Resume', icon: <Download size={32} />, action: () => {} /* Add resume link */ },
    { name: 'Theme', icon: <ThemeToggle /> },
    { name: 'Clock', icon: <Clock size={32} />, nameComponent: <span className="font-mono text-2xl">{time}</span> },
  ];
  
  const gridOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const lightBg = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`;
  const darkBg = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`;

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-[#0a0a0a] text-black dark:text-gray-300"
      style={{ backgroundImage: theme === 'dark' ? darkBg : lightBg }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Corner UI */}
      <div className="absolute top-8 left-8 text-left">
        <h2 className="text-xl font-bold text-black dark:text-white">FM</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Creative Technologist</p>
      </div>
      <button onClick={closeMenu} className="absolute top-8 right-8 text-black dark:text-white">
        <X size={28} />
      </button>

      {/* Grid Menu */}
      <motion.div 
        className="grid grid-cols-3 w-full max-w-2xl h-[600px]"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.07 } }
        }}
      >
        {gridOrder.map(i => {
          const item = menuItems[i];
          return (
            <motion.div
              key={item.name}
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
              whileHover={{ scale: 1.03, backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)', zIndex: 1 }}
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

      {/* Social Links */}
      <div className="absolute bottom-8 right-8 flex space-x-6 text-black dark:text-white">
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-400"><Github size={24} /></a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-400"><Linkedin size={24} /></a>
        <a href="mailto:firdaus.manalu@email.com" className="hover:text-gray-600 dark:hover:text-gray-400"><Mail size={24} /></a>
      </div>
    </motion.div>
  );
};

export default Menu;