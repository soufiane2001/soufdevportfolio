
import React, { useState, useEffect } from 'react';

import { motion } from "framer-motion";
import './style.css'

const AnimatedCounter = ({ targetNumber, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = Math.ceil(targetNumber / (duration )); // Calculate increment step
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev + increment >= targetNumber) {
          clearInterval(interval); // Clear interval when target is reached
          return targetNumber;
        }
        return prev + increment;
      });
    }, 90); // Update every 10ms

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [targetNumber, duration]);

  return <h3>{count}+</h3>;
};









const Hero = () => {
  return (
    <section className="hero"  >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
           
      >
      <h1>Hi there !</h1>
      <h1>I'm <span>Soufiane Boutatss,</span></h1>

      <h2><span>Web & mobile Developer</span></h2>
      <button className="contact" onClick={() =>  window.location.href = 'mailto:sboutatss@gmail.com'} >Contact me</button> 
      <button className="cv" onClick={() =>  window.location.href =`${process.env.PUBLIC_URL}/Soufianelt.pdf`}  >Download cv</button>
      <div className="herofooter">

      <div className="border">
        <AnimatedCounter targetNumber={37} duration={10000} />
        <p>Projects done</p>
      </div>

      <div className="border">
        <AnimatedCounter targetNumber={27} duration={3000} />
        <p>Happy client</p>
      </div>

      <div className="border">
        <AnimatedCounter targetNumber={4} duration={3000} />
        <p>Year experience</p>
      </div>


  <div className='foothero' style={{marginTop:150,position:'absolute',marginLeft:-490}}>
  
   <div>
         <a href="https://web.facebook.com/soufianski2001" >
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"/>
        </a>
             <a href="https://www.linkedin.com/in/soufiane-boutatss-96400a1ba/" class="">
    <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"/></a>
            <a href="https://github.com/soufiane2001" class="">
    <img src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"/>
        </a>

   </div>
  </div>

</div>

</motion.div>

<img src="https://portfoliosoufdev.vercel.app/static/media/so.c04a87ed30752959fd17.png" />




    </section>
  );
};

export default Hero;
