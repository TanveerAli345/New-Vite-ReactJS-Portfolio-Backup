import React from 'react'
import Nav from './Nav'
import Tilt from 'react-parallax-tilt'

export default function Contact() {
  return (
    <>
      <Nav />
      <div className='container'>

      <section className='about-1'>
        <h1 className='contact-heading'>Let's build something amazing together!</h1>
        <div className="scroll-info">
          <div>
            <i className="fa-solid fa-computer-mouse"></i>
            Scroll down
            <i className="fa-solid fa-arrow-down-long"></i> 
          </div>
        </div>
      </section>

      <section className='about-2'>
      <div className='about-2-heading'>
          <h2 className='section-h2'>Let's Connect!</h2>
          <p className='text'>Hit me up</p>
        </div>

        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
        <div className='skills' data-tilt data-tilt-glare>
          <div className='grid'>
            <p className='text bold blue'>Email</p>
            <p className='text right'>tanveerali345@gmail.com</p>

            <p className='text bold blue'>Phone</p>
            <p className='text right'>+91 89820 52700</p>
          </div>
          <div className='contact-logos'>
            <a className='link white mail' target="_blank" href="mailto:tanveerali345@gmail.com">
              <i class="fa-solid fa-square-envelope"></i>
            </a>
            <a className='link white linkedin' target="_blank" href="https://www.linkedin.com/in/tanveer-ali-tapya/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a className='link white github' target="_blank" href="https://github.com/TanveerAli345/">
              <i class="fa-brands fa-square-github"></i>
            </a>
            <a className='link white behance' target="_blank" href="https://www.behance.net/tanveerali8">
              <i class="fa-brands fa-square-behance"></i>
            </a>
          </div>
        </div>
        </Tilt>
      </section>

      </div>
    </>
  )
}
