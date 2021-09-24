import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">Car Description</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink className="text-dark" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-dark" href="#body">Body</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-dark" href="#engine">Engine</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-dark" href="#transmission">Transmission</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-dark" href="#suspension">Suspension</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-dark" href="#brakes">Brakes</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-dark" href="#battery">Battery</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
