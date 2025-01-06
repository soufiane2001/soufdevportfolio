import React, { useEffect } from 'react';
import './index.css';
import Header from './header/header'

import Hero from './hero/hero'

import Portfolio from './portfolio/Portfolio';
import Testimonials from './Testimonials/Testimonials';
import Skills from './skills/Skills';
import Experience from './Experience/Experience';
import About from './about/About';

function Home(){
  return (
    <>


<Header/>
  <Hero/>
  <About/>
  <Skills/>
   <Portfolio/>
  <Experience/>
<Testimonials/>
 
  </>
  );
};

export default Home;
