import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const { state } = location;
    if (state && state.sectionId) {
      const element = document.getElementById(state.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
};

export default Home;