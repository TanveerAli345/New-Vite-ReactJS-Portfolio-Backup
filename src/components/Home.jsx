import React from 'react'
import bg from '../assets/images/bg.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
        <div class="blur">
          <h2>This website is under development for mobile, for best experience view on desktop</h2>
        </div>
        <div className="main">
            <div className="bg">
                <img className="bg-img" src={bg} alt="Tanveer" />
            </div>
            <Link className="link" to="/about"><h1 className="main-heading one"><span>Hello</span></h1></Link>
            <Link className="link" to="/work"><h1 className="main-heading two"><span>I am</span></h1></Link>
            <Link className="link" to="/contact"><h1 className="main-heading three"><span>Tanveer</span></h1></Link>
        </div>
        <div className="info">
          <div>
            <i className="fa-regular fa-hand-pointer"></i>
            Hover over the text
          </div>
        </div>
        <div className='resume-btn'>
          <a className='link white resume-btn-link' href="https://drive.google.com/drive/folders/15kuxIyiqLOnudBhGgSTFI2bvSJBY5izn?usp=share_link" target="_blank">
            Resume <i className="fa-solid fa-file-arrow-down"></i>
          </a>
        </div>
    </>
  )
}
