import React from 'react';
import coverImage from "../assets/img/dims.jpg";
import Jumbotron from 'react-bootstrap/Jumbotron';
//import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

//import { capitalizeFirstLetter } from "../../utils/helpers";

// Props are passed through our functional component.
function Nav(props) {
  const sections = ['About', 'Portfolio', 'Contact', 'Resume'];
  
  
  return (

<Jumbotron fluid className='bg-dark'>
<img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover"/>

  <nav className="navbar navbar-expand-lg text-white bg-dark">

  <div className="container-fluid">
    <h1>
    <a className="navbar-brand text-white" href="/">
    <span role="img" className = 'fs-1 text-white' aria-label="computer"> 👨🏽‍💻</span> Jonathan Robinson
    </a>
  </h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  <ul className="nav">
      {sections.map(section => (
        <li className="nav-item fs-2 text-white" key={section}>
          <a
            href={'#' + section.toLowerCase()}
            // Whenever a tab is clicked on,
            // the current page is set through the handlePageChange props.
            onClick={() => props.handlePageChange(section)}
            className={ 
              props.currentPage === section ? 'nav-link active' : 'nav-link'
            }
          >
            {section}
          </a>
        </li>
      ))}
    </ul>
    </div>
  </nav>
</Jumbotron>

  );
}

export default Nav;