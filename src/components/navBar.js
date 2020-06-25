import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../logo.png';

class NavBar extends Component {
    render() {
        return (
            <Navbar className="text-center" bg="" expand="md" style={{ backgroundColor: "#ff1a75" }}>
                <Link exact to="/" className="navbar-brand text-center"><img src={logo} alt="Rcalculator" /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/playmore" className="nav-link"><b>PlayMore</b></Link>
                        <Link to="/about" className="nav-link"><b>About</b></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default NavBar;