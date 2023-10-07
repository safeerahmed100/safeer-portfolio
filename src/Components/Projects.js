import React from 'react'
import Typewriter from 'typewriter-effect'

function Project() {
  return (
    <div className='project-container'>
      <h5><Typewriter
  options={{
    strings: ['Projects'],
    autoStart: true,
    loop: true,
  }}
/></h5>
      <div className='project-showcase-options'>
        <span>Wordpress</span>
        <span>React</span>
        <span>Graphics</span>

      </div>
      <div className='project-gallery'>
        <div className='project-card'>
          <div className='project-card-content'>
          <h2>Title</h2>
          <p>paragraph</p>
          <button>Preview</button>
        </div>
        </div>
       
        <div className='project-card'>
          <div className='project-card-content'>
          <h2>Title</h2>
          <p>paragraph</p>
          <button>Preview</button>
        </div>
        </div>
        <div className='project-card'>
          <div className='project-card-content'>
          <h2>Title</h2>
          <p>paragraph</p>
          <button>Preview</button>
        </div>
        </div>
        <div className='project-card'>
          <div className='project-card-content'>
          <h2>Title</h2>
          <p>paragraph</p>
          <button>Preview</button>
        </div>
        </div>
        <div className='project-card'>
          <div className='project-card-content'>
          <h2>Title</h2>
          <p>paragraph</p>
          <button>Preview</button>
        </div>
        </div>
        <div className='project-card'>
          <div className='project-card-content'>
          <h2>Title</h2>
          <p>paragraph</p>
          <button>Preview</button>
        </div>
        </div>
        <button>Show More</button>
      </div>
  </div>
  )
}

export default Project;