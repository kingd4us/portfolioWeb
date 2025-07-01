import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './components/Home'
import AllProjects from './components/AllProjects'
import Menu from './components/Menu'
import MainLayout from './components/MainLayout'
import { ThemeProvider } from './components/theme-provider'
import AnimatedPage from './components/AnimatedPage'

function App() {
  // The menu is now the default view, managed by routing.
  // This state will control showing/hiding the portfolio content.
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const location = useLocation();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AnimatePresence mode="wait">
          {isMenuOpen && <Menu closeMenu={() => setIsMenuOpen(false)} />}
        </AnimatePresence>
        <div className={`transition-opacity duration-500 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MainLayout openMenu={() => setIsMenuOpen(true)}><AnimatedPage><Home /></AnimatedPage></MainLayout>} />
            <Route path="/work" element={<MainLayout openMenu={() => setIsMenuOpen(true)}><AnimatedPage><AllProjects /></AnimatedPage></MainLayout>} />
          </Routes>
        </div>
    </ThemeProvider>
  )
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default Root