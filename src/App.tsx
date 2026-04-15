import Navbar from './components/Navbar'
import Header from './components/Header'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="portfolio-container">
        <Header />
        <div className="ticks"></div>
        
        <main>
          <Experience />
          <div className="ticks"></div>
          
          <Projects />
          <div className="ticks"></div>
          
          <Education />
          <div className="ticks"></div>
          
          <Skills />
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default App
