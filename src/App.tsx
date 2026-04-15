import React, { useEffect } from 'react'
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
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <Navbar />
      <div className="portfolio-container">
...
        
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
