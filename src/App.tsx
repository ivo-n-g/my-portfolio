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
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="bg-interactive" />
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
