import React, { useState } from 'react';
import Nav from './Nav';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
//import Footer from './Footer';

function Arrange() {
    // Using useState, set the default value for currentPage to 'Home'
    const [currentPage, handlePageChange] = useState('About');
  
    // The renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
      switch (currentPage) {
        case 'About':
          return <About />;
        case 'Portfolio':
          return <Portfolio />;
        case 'Contact':
          return <Contact />;
          case 'Resume':
          return <Resume />;
        default:
          return <About />;
      }
    };
  
    
    
      return (
        <div>
          <Nav 
          currentPage={currentPage} handlePageChange={handlePageChange}
          ></Nav>
          <main>
          <div>{renderPage(currentPage)}</div>
          </main>
        </div>
      );
    
  }
  
  export default Arrange;
  