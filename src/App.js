import React, { Suspense, lazy } from 'react';
import './index.css';
import Header from './header/header';
import Hero from './hero/hero';

// ✅ Lazy load heavy components
const About = lazy(() => import('./about/About'));
const Skills = lazy(() => import('./skills/Skills'));
const Portfolio = lazy(() => import('./portfolio/Portfolio'));
const Experience = lazy(() => import('./Experience/Experience'));
const Testimonials = lazy(() => import('./Testimonials/Testimonials'));
const Footer = lazy(() => import('./Footer'));

// Loading spinner component
const LoadingFallback = () => (
  <div style={{
    minHeight: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '18px',
    background: 'transparent'
  }}>
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p style={{ marginTop: '20px', color: 'rgb(214, 196, 1)' }}>Loading...</p>
    </div>
  </div>
);

function Home() {
  return (
    <>
      {/* Always load Header and Hero immediately */}
      <Header />
      <Hero />

      {/* Lazy load everything below the fold */}
      <Suspense fallback={<LoadingFallback />}>
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Testimonials />
        <Footer />
      </Suspense>
    </>
  );
}

export default Home;
