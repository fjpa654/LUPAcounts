import React from 'react';
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from './components/Skills/skills';
import Social from './components/Social/social';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
