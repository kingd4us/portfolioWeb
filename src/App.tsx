import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './components/Home'
import AllProjects from './components/AllProjects'
import Menu from './components/Menu'
import MainLayout from './components/MainLayout'
import { ThemeProvider } from './components/theme-provider'
import AnimatedPage from './components/AnimatedPage'

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Menu /></AnimatedPage>} />
        <Route path="/home" element={<MainLayout><AnimatedPage><Home /></AnimatedPage></MainLayout>} />
        <Route path="/work" element={<MainLayout><AnimatedPage><AllProjects /></AnimatedPage></MainLayout>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="min-h-screen bg-gray-100 dark:bg-[#030712] fade-in">
          <AnimatedRoutes />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App