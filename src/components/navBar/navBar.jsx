import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class NavBar extends Component {

  handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.replace('/login')
  }

  render() {
    const appNavbar = (
      <Navbar  collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand expand="lg" href="/dashboard">
            &nbsp; COVID-19 Info bot
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/dashboard">Home</Nav.Link>
              <Nav.Link href="#">Profile</Nav.Link>
              <Nav.Link href="#" className="logout-btn" onClick={this.handleClick}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
    return (
      <div className="navigation-bar">
        {appNavbar}
      </div>
    )
  }
}

export default NavBar;
