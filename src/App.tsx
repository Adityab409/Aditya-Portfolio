import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer'
const App: React.FC = () => {
  AOS.init({ duration: 1000 });
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ContactForm />
      <Footer />
      
    </div>
  );
};

export default App;
