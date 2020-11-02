import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">TrapCity <i class="fa fa-desktop" aria-hidden="true"></i> </Link>
            </div>
        </nav>
        </>
    )
}

export default Navbar
