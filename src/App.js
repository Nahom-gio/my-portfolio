import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Tech from "./components/Tech";
import Footer from "./components/Footer";

function App() {
  return (
<div className="absolute w-full top-0 bg-[#0a0f1c] text-white"> 
      <Navbar />
      
      <section id="about"><About /></section>
      <section id="Tech"><Tech /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <section id="footer"><Footer /></section>
    </div>
  );
}

export default App;
