import React from 'react'
import Nav from './Nav'
import project1 from '../assets/images/Project1.png'
import project2 from '../assets/images/Project2.png'
import project3 from '../assets/images/Project3.png'
import html from '../assets/images/html5.svg'
import css from '../assets/images/css3.svg'
import js from '../assets/images/javascript.svg'
import react from '../assets/images/react.svg'
import firebase from '../assets/images/firebase.svg'
import Tilt from 'react-parallax-tilt'
import solidity from '../assets/images/solidity.svg'
import nodejs from '../assets/images/node-js.svg'
import eth from '../assets/images/ethereum.svg'

export default function Work() {
  return (
    <>
        <Nav />
        <div className='container'>

      <section className='work-1'>
        <div className='work-1--left'>
          <h1 className='section-heading'>Curated list of projects</h1>
          <p className='text'>spicyyyyy stuff</p>
          <div className="scroll-info">
          <div>
            <i className="fa-solid fa-computer-mouse"></i>
            Scroll down
            <i className="fa-solid fa-arrow-down-long"></i> 
          </div>
        </div>
        </div>
        <div className='work-1--right'>
          <div className='lil-card card'></div>
          <div className='big-card card'></div>
          <div className='lil-card card'></div>
          <div className='big-card card'></div>
          <div className='lil-card card'></div>
          <div className='big-card card'></div>
          <div className='lil-card card'></div>
          <div className='big-card card'></div>
        </div>
      </section>

      <section className='work-2'>

        <div className='project-img-div'>
          <Tilt tiltAngleYInitial={-10} tiltMaxAngleX={5} tiltMaxAngleY={10}>
            <div>
             <img className='project-img' src={project1} alt="Cloud Drive Screenshot" />
            </div>
          </Tilt>
          <div className='tech-stack'>
            <img src={html} alt="HTML5" />
            <img src={css} alt="CSS3" />
            <img src={js} alt="JS" />
            <img src={react} alt="React" />
            <img src={firebase} alt="Firebase" />
          </div>
        </div>

        <div className='project-info'>
          <div className='project-info-text'>
            <h2 className='white no-mg right'>Cloud Drive Application</h2>
            <p className='text right'>
              Web application with file upload and folder creation features. 
              I created this as my final year minor project.
              The tech stack for this includes: HTML5, CSS3, Bootstrap, JavaScript, ReactJS and Firebase 
              (hosting and storage).
            </p>
          </div>

          <div className='project-info-btns'>
            <a className='project-btn no-mg' href="https://auth-development-c1c02.web.app/" target="_blank">
              <i className="fa-solid fa-arrow-up-right-from-square"></i> Live
            </a>
            <a className='project-btn no-mg'>
              <i class="fa-brands fa-github"></i> GitHub
            </a>
          </div>      
        </div>

      </section>

      <section className='work-3'>

        <div className='project-info'>
          <div className='project-info-text'>
            <h2 className='white no-mg'>NFT Marketplace</h2>
            <p className='text'>
              Collaborated with and lead a team to build an NFT marketplace
              where users can mint ERC721-implemented NFTs.
              I worked on the front end as well as back end with technologies
              such as React.js, Solidity, Truffle, Ganache, and Node.js.
            </p>
          </div>
          <div className='project-info-btns'>
            <a className='project-btn no-mg disabled'>
              <i className="fa-solid fa-arrow-up-right-from-square"></i> Live
            </a>
            <a className='project-btn no-mg' href='https://github.com/TanveerAli345/NFT-Marketplace' target="_blank">
              <i class="fa-brands fa-github"></i> GitHub
            </a>
          </div>      
        </div>

        <div className='project-img-div'>
          <Tilt tiltAngleYInitial={10} tiltMaxAngleX={5} tiltMaxAngleY={10}>
            <div>
             <img className='project-img' src={project2} alt="Cloud Drive Screenshot" />
            </div>
          </Tilt>
          <div className='tech-stack'>
            <img src={html} alt="HTML5" />
            <img src={css} alt="CSS3" />
            <img src={js} alt="JS" />
            <img src={react} alt="React" />
            <img src={solidity} alt="Solidity" />
            <img src={nodejs} alt="NodeJS" />
            <img src={eth} alt="Ethereum" />
          </div>
        </div>

      </section>

      <section className='work-4'>
        
      <div className='project-img-div'>
          <Tilt tiltAngleYInitial={-10} tiltMaxAngleX={5} tiltMaxAngleY={10}>
            <div>
             <img className='project-img' src={project3} alt="Cloud Drive Screenshot" />
            </div>
          </Tilt>
          <div className='tech-stack'>
            <img src={html} alt="HTML5" />
            <img src={css} alt="CSS3" />
            <img src={js} alt="JS" />
            <img src={react} alt="React" />
          </div>
        </div>

        <div className='project-info'>
          <div className='project-info-text'>
            <h2 className='white no-mg right'>WhatsApp Web Replica (Frontend)</h2>
            <p className='text right'>
              A replica of WhatsApp Web made using HTML, CSS, JS and React. It takes
              pre-seeded data from a local file (users and messages) and even has the feature
              to add new messages.
            </p>
          </div>

          <div className='project-info-btns'>
            <a className='project-btn no-mg' href='https://whatsappwebreplica.netlify.app/' target="_blank">
              <i className="fa-solid fa-arrow-up-right-from-square"></i> Live
            </a>
            <a className='project-btn no-mg' href='https://github.com/TanveerAli345/frontpage-whatsapp-web' target="_blank">
              <i class="fa-brands fa-github"></i> GitHub
            </a>
          </div>      
        </div>

      </section>

      </div>
    </>
  )
}