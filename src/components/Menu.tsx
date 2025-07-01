import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail, Download, Clock } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const Menu = () => {
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    navigate('/home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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
          const seconds = String(initialTime.getSeconds()).padStart(2, '0');
          setTime(`${hours}:${minutes}:${seconds}`);
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
    { name: 'Home', icon: <Home />, action: () => navigate('/home') },
    { name: 'About', icon: <User />, action: () => scrollToSection('about') },
    { name: 'Skills', icon: <Code />, action: () => scrollToSection('skills') },
    { name: 'Work', icon: <Briefcase />, action: () => scrollToSection('work') },
    { name: 'Title', nameComponent: <h1 className="text-2xl font-bold">Firdaus Manalu</h1> },
    { name: 'Contact', icon: <Mail />, action: () => scrollToSection('contact') },
    { name: 'Resume', icon: <Download />, action: () => {} /* Add resume link */ },
    { name: 'Theme', icon: <ThemeToggle /> },
    { name: 'Clock', icon: <Clock />, nameComponent: <span className="font-mono text-lg">{time}</span> },
  ];
  
  const gridOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-[#030712] text-black dark:text-white">
      <motion.div 
        className="grid grid-cols-3 w-full max-w-2xl aspect-square"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {gridOrder.map(i => {
          const item = menuItems[i];
          return (
            <motion.div
              key={item.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center border border-gray-300 dark:border-zinc-800"
            >
              {item.action ? (
                <button onClick={item.action} className="flex flex-col items-center justify-center w-full h-full space-y-2">
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              ) : (
                <div className="flex flex-col items-center justify-center w-full h-full space-y-2">
                  {item.icon}
                  {item.nameComponent || <span>{item.name}</span>}
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Menu;