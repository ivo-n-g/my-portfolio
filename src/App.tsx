import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'
import './App.css'

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="portfolio-container">
        <Header />
        
        <main>
          <Reveal>
            <Experience />
          </Reveal>
          
          <Reveal>
            <Projects />
          </Reveal>
          
          <Reveal>
            <Education />
          </Reveal>
          
          <Reveal>
            <Skills />
          </Reveal>
          
          <Reveal>
            <Contact />
          </Reveal>
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default App
