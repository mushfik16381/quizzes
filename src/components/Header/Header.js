import React from 'react';
import logo from '../../images/logo.png';
import { Link  } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

const Header = () => {
    return (
        <Navbar expand="lg">
            
      <div className='header-container container-fluid'>
          <Navbar.Brand as={Link} to="/">
            <img className='logo' src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-container">
              <Nav.Link as={Link}   to="/" >Topics</Nav.Link>
              <Nav.Link as={Link}  to="/statistics">Statistics</Nav.Link>
              <Nav.Link as={Link}  to="/blog">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </div>
      </Navbar>



        
    );
};

export default Header;