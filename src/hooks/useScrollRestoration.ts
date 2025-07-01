import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollPositions = JSON.parse(sessionStorage.getItem('scrollPositions') || '{}');
    
    if (scrollPositions[location.pathname]) {
      window.scrollTo(0, scrollPositions[location.pathname]);
    }

    const handleScroll = () => {
      const updatedPositions = JSON.parse(sessionStorage.getItem('scrollPositions') || '{}');
      updatedPositions[location.pathname] = window.scrollY;
      sessionStorage.setItem('scrollPositions', JSON.stringify(updatedPositions));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);
};

export default useScrollRestoration;