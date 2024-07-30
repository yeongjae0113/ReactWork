import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Link to="/" className="navbar-brand">홈</Link>
        <Nav className="me-auto">
          <Link to="/saveForm" className="navbar-link">글쓰기</Link>          
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;