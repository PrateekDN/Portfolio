import { useState } from 'react';
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
  // 1. We only need the 'loading' state now. No more 'loaderVisible'.
  const [loading, setLoading] = useState(true);
  
  useScrollReveal(!loading);
  useScrollSpy();

  // 2. This function runs the EXACT millisecond the GSAP animation finishes in Loader.jsx
  const handleLoaderComplete = () => {
    setLoading(false);
    document.body.classList.add('loaded'); // Triggers your home screen animations
  };

  return (
    <>
      <AmbientBackground />
      
      {/* 3. Pass the completion function down to the loader */}
      {loading && <Loader onComplete={handleLoaderComplete} />}
      
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