import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Skills from '@/components/Skills';
import React from 'react';

const page = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Resume />
      <Contact />
    </div>
  );
};

export default page;