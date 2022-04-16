import React from 'react';


function Nav({ currentPage, handlePageChange }) {
    return (
        <header className='nav nav-item'>
        <h1>Kazi Islam's Portfolio</h1>
        <ul className="nav nav-tabs">
            <li className="nav-items">
            <a
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
                About Me
            </a>
            </li>
            <li className="nav-items">
            <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
                Portfolio
            </a>
            </li>
            <li className="nav-items">
            <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
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