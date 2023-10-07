import React from 'react'
import myPhoto from '../Assests/my-photo.png'
import Typewriter from 'typewriter-effect'


function About() {
  return (
    <div className='about-container'>
     < div className='about-image'>
      <img src={myPhoto} alt='my-picture'/>
     </div>
     <div className='about-content-container'>
     <h5><Typewriter
  options={{
    strings: ['About Me'],
    autoStart: true,
    loop: true,
  }}
/></h5>
     <p>Hello! I'm Safeer Ahmed, a passionate WordPress developer and MERN (MongoDB, Express.js, React, Node.js) stack developer with a love for creating dynamic and interactive web applications. With a strong foundation in both front-end and back-end technologies, I specialize in building robust and user-friendly websites and web applications.

My goal is to craft digital experiences that not only look great but also function seamlessly. I'm dedicated to staying up-to-date with the latest web development trends and best practices to deliver high-quality solutions to my clients.


</p>
    <div className='about-options'>
      <a>Skills</a>
      <a>Experience</a>
      <a>Education</a>
    </div>

     </div>
    </div>
  )
}

export default About