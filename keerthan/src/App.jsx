import React from "react";
import "./App.css";

// Import your components
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Skill from "./components/skills/skill";
import Project from "./components/projects/project";
import Contact from "keerthan/src/components/Contact/contact.jsx";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
