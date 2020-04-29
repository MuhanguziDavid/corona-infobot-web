import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './footer.scss';


class Footer extends Component {
  render() {
    const appFooter = (
      <Navbar sticky="bottom" className="footer-bar fixed-bottom" bg="light" variant="light">
        <Navbar.Brand className="navbar-brand-custom" expand="lg" href="#home">david muhanguzi | paul owori | 2020</Navbar.Brand>
      </Navbar>
    )
    return (
      <div>
        {appFooter}
      </div>
    )
  }
}

export default Footer;
