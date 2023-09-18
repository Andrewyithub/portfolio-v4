import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar/';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <div className={`App ${!isDarkMode ? 'light' : ''}`}>
      <div className="container flow">
        <NavBar isDarkMode={isDarkMode} handleToggle={toggleTheme} />
        <Home />
        <Projects />
        <About />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
}
