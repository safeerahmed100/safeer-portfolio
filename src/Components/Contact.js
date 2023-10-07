import React from 'react'
import Typewriter from 'typewriter-effect'

function Contact() {
  return (
    <div className='contact'>
      <h5><Typewriter
  options={{
    strings: ['Contact Me'],
    autoStart: true,
    loop: true,
  }}
/></h5>
      <div className='contact-container'>

    <div className='contact-left'>
      <div className='contact-info'>
<i className="fa-solid fa-phone"></i>
<span>+92-3082489887</span>
</div>
<div className='contact-info'>
    <i className="fa-solid fa-envelope"></i> 
    <span>safeerahmed23901@gmail.com</span>
    </div>
      <div className='contact-icons'>
      <i className="fa-brands fa-facebook"></i>        
      <i className="fa-brands fa-github"></i>
      <i className="fa-brands fa-linkedin"></i>
      </div>
      <button>Download CV</button>
    </div>
    <div className='contact-right'>
      <form>
        <input type='text' placeholder='Your Name'/>
        <input type='email' placeholder='Your Email'/>
        <input type='text' placeholder='Your Message'/>
        <button>Submit</button>

      </form>
    </div>
</div>
    </div>
  )
}

export default Contact