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
