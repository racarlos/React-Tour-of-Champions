import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './NavBarComponent.css'


export const NavBarComponent = (props) => {

  return (
    <Navbar bg="dark" test-data="navbar">
      <Container className=''>
        <Navbar.Brand className='mx-4' href="/">
          <img
            test-data="navlink-logo"
            src="/images/brand.png"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link className='nav-text mx-2' test-data="navlink-home" href="/"> Home </Nav.Link>
          <Nav.Link className='nav-text mx-2' test-data="navlink-champions" href="/champions"> Champions </Nav.Link>
          <Nav.Link className='nav-text mx-2' test-data="navlink-items" href="/items"> Items </Nav.Link>
        </Nav>
      </Container>
    </Navbar>

  
  );
}