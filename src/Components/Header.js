import React from 'react';
import Navbar from './Navbar';
import Typewriter from 'typewriter-effect';

function Header() {
  return (
    <div className='hero-section'>
      <Navbar />
      <div className='hero-text'>
        <h2>
          <Typewriter
            options={{
              strings: ['WordPress Developer', 'MERN Stack Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <h3>Hi, I'm <span style={{ color: '#FB0606' }}>Safeer Ahmed</span></h3>
        <h4>
          <Typewriter
            options={{
              strings: ['Fast Pace Learner','Passionate Coder', 'Innovative Problem Solver', 'Web Enthusiast'],
              autoStart: true,
              loop: true,
            }}
          />
        </h4>
      </div>
      <div className='hero-overlay'></div>
    </div>
  );
}

export default Header;
