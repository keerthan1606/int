import React from "react";
import "./App.css";

// Import your components
import navbar from "./components/navbar/navbar";
import hero from "./components/hero/hero";
import about from "./components/about/about";
import skill from "./components/skills/skill";
import project from "./components/projects/project";
import contact from "./components/contacts/contacts";
import footer from "./components/footer/footer";

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
