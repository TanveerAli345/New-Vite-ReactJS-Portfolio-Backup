import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='navbar'>
        <div className='navbar--logo'>
            <h1 className='bold'></h1>
        </div>
        <div>
            <Link className="link btn" to="/"><i className="fa-solid fa-right-from-bracket"></i></Link>
        </div>
    </nav>
  )
}
