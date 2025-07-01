import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import AllProjects from './components/AllProjects';
import Menu from './components/Menu';
import { ThemeProvider } from './components/theme-provider';
import AnimatedPage from './components/AnimatedPage';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const location = useLocation();

  return (
    <div className="bg-gray-100 dark:bg-[#030712]">
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><Menu /></AnimatedPage>} />
          <Route path="/home" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/work" element={<AnimatedPage><AllProjects /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;