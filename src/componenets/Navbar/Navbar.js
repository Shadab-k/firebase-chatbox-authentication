import React from 'react'
import './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div >
            <nav>
                <ul>
                    <h3>Chat-Box</h3>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/services'>Services </Link></li>
                </ul>
                 <button><Link to='/login'>Logout</Link></button>
            </nav>

        </div>
    )
}

export default Navbar
