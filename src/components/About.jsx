import React from 'react'
import Nav from './Nav'
import html from '../assets/images/html5.svg'
import css from '../assets/images/css3.svg'
import js from '../assets/images/javascript.svg'
import react from '../assets/images/react.svg'
import cpp from '../assets/images/c++.svg'
import ardent from '../assets/images/ardent.png'
import udemy from '../assets/images/udemy.jpg'
import fcc from '../assets/images/fcc.png'
import Tilt from 'react-parallax-tilt'

export default function About() {
  return (
    <>
      <Nav />
      <div className='container'>

      <section className='about-1'>
        <h1 className='section-heading'>Creative Frontend Developer</h1>
        <p className='text'>I can make your website look better than your last haircut</p>
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
          <h2 className='section-h2'>Skills</h2>
          <p className='text'>Languages, frameworks, this and that</p>
        </div>

        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
        <div className='skills' data-tilt data-tilt-glare>
          <div className='logos'>
            <img src={html} alt="HTML5" />
            <img src={css} alt="CSS3" />
            <img src={js} alt="JS" />
            <img src={react} alt="React" />
            <img src={cpp} alt="C++" />
          </div>
          <div className='grid'>
            <p className='text bold blue'>Tech stack</p>
            <p className='text right'>HTML5, CSS3, JS, React, C++</p>

            <p className='text bold blue'>Languages</p>
            <p className='text right'>English, Hindi</p>
          </div>
        </div>
        </Tilt>
      </section>

      <section className='about-3'>
      <div className='about-2-heading'>
          <h2 className='section-h2 white'>Certificates</h2>
          <p className='text'>I got these!</p>
        </div>

        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
        <div className='certs'>
          <div className='certs-grid'>
            <div>
              <img className='cert-img' src={fcc} alt="" />
              <div className='text-center'>
                <p className='text bold'>Responsive Web Design</p>
                <p className='text small'>freeCodeCamp.org</p>
              </div>
              <a href="https://www.freecodecamp.org/certification/adamtitanium/responsive-web-design" 
              target="_blank" className='pink'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>

            <div>
              <img className='cert-img' src={udemy} alt="" />

              <div className='text-center'>
              <p className='text bold'>NFT Web Development</p>
              <p className='text small'>udemy.com</p>
              </div>
              <a href="https://www.udemy.com/certificate/UC-4a0ed8d6-2be4-4077-b143-36e20c47fd66/" 
              target="_blank" className='pink'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>

            <div>
              <img className='cert-img' src={ardent} alt="" />

              <div className='text-center'>
                <p className='text bold'>Data Science with ML and AI</p>
                <p className='text small'>Ardent Computech Pvt. Ltd</p>
              </div>
              <a href="https://drive.google.com/file/d/1vc508jGcC2a4LfQZJBf0NSzwx52O-Bai/view" 
              target="_blank" className='pink'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>

          </div>
        </div>
        </Tilt>
      </section>
      </div>
    </>
  )
}