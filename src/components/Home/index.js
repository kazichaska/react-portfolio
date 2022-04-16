import React, { useState } from 'react';
import About from '../About';
import Nav from '../Nav';
import Resume from '../Resume';
// import '../../App.css';
import ContactForm from '../Contact';
import Portfolio from '../Portfolio';


export default function Home() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <ContactForm />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <About />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (

        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );



}


