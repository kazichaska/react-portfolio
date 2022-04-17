import React from 'react';
import './nav.css'

function Nav({ currentPage, handlePageChange }) {

    function changeColorHover(e) {
        e.target.style.background = 'green'
    }

    function resetColor(e) {
        e.target.style.background = 'none'
    }

    return (
        <header className='nav nav-item'>
        <h1>Kazi Islam</h1>
        <img src="/images/img_avatar.png" alt="Avatar" className="avatar"></img>
        <ul className="nav nav-tabs">
            <li className="nav-items">
            <a
                href="#about"
                onClick={() => handlePageChange('About')}
                onMouseOver={changeColorHover}
                onMouseLeave={resetColor}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
                About Me
            </a>
            </li>
            <li className="nav-items">
            <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                onMouseOver={changeColorHover}
                onMouseLeave={resetColor}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
                Portfolio
            </a>
            </li>
            <li className="nav-items">
            <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                onMouseOver={changeColorHover}
                onMouseLeave={resetColor}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
                Contact
            </a>
            </li>
            <li className="nav-items">
            <a
                href="/resume/Resume.pdf"
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
                Resume
            </a>
            </li>
        </ul>
        </header>
    );
}


export default Nav;