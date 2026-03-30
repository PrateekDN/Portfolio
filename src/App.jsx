import { useState, useEffect } from 'react';
import AmbientBackground from './components/layout/AmbientBackground';
import Loader from './components/layout/Loader';
import { Header as Navbar } from './components/ui/header-2';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import useScrollReveal from './hooks/useScrollReveal';
import useScrollSpy from './hooks/useScrollSpy';

function App() {
  const [loading, setLoading] = useState(true);
  const [loaderVisible, setLoaderVisible] = useState(true);
  
  useScrollReveal(!loading);
  useScrollSpy();

  useEffect(() => {
    // Wait 2000ms (2 seconds) for the percentage counter to hit 100%
    const timer1 = setTimeout(() => {
      setLoaderVisible(false); // Triggers the Framer Motion slide-up exit
      
      // Wait 1000ms (1 second) for the exit animation to finish sliding up
      const timer2 = setTimeout(() => {
        setLoading(false); // Fully removes the component from the DOM
        document.body.classList.add('loaded'); // Starts your homepage animations
      }, 1000); 
      
      return () => clearTimeout(timer2);
    }, 2000); 
    
    return () => clearTimeout(timer1);
  }, []);

  return (
    <>
      <AmbientBackground />
      {loading && <Loader visible={loaderVisible} />}
      <Navbar />
      <main className="gap-x-12 gap-y-12">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  );
}

export default App;