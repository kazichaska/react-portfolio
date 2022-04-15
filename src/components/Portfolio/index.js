import React, { useState } from 'react';
import About from '../About';
import Nav from '../Nav';
import Resume from '../Resume';
// import '../../App.css';
import ContactForm from '../Contact';

export default function Portfolio() {
const [currentPage, setCurrentPage] = useState('About');

   const renderPage = () => {
    if (currentPage === 'About') {
        return <About />;
    }
    if (currentPage === 'Portolio') {
        return <Portfolio />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
    }
    return <ContactForm />;
  };
  
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    //  JSX
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <main>
     
      </main>
    </div>
  );
}

// export default Portfolio;
