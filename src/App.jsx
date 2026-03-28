import { useState, useEffect } from 'react';
import AmbientBackground from './components/layout/AmbientBackground';
import Loader from './components/layout/Loader';
import Navbar from './components/layout/Navbar';
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
    const timer1 = setTimeout(() => {
      setLoaderVisible(false);
      const timer2 = setTimeout(() => {
        setLoading(false);
        document.body.classList.add('loaded');
      }, 500);
      return () => clearTimeout(timer2);
    }, 1200);
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