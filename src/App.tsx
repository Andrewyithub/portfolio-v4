import "./App.css";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import NavBar from "./components/NavBar/";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <div className={`App ${!isDarkMode ? "light" : ""}`}>
      <NavBar isDarkMode={isDarkMode} handleToggle={toggleTheme} />
      <div className="container flow">
        <Fade fraction={0.2} triggerOnce>
          <Home />
        </Fade>
        <Fade fraction={0.2} triggerOnce>
          <Projects />
        </Fade>
        <Fade fraction={0.2} triggerOnce>
          <About />
        </Fade>
        <Fade fraction={0.2} triggerOnce>
          <Skills />
        </Fade>
      </div>
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
}
