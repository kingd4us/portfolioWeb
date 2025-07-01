import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';
import SideNav from './SideNav'; // Import the new SideNav

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const { state } = location;
    if (state && state.sectionId) {
      setTimeout(() => {
        const element = document.getElementById(state.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150); // A small delay to ensure the page has rendered
    }
  }, [location]);

  return (
    <div>
      <SideNav />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;