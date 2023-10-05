import React from 'react';
import Header from './components/header.js';
import About from './components/about.js';
import Skill from './components/skill.js';
import Projects from './components/project.js';
import Contact from './components/contact.js';
import './style/app.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
      {/* Add other components (About, Projects, Contact) here */}
    </div>
  );
}

export default App;
