import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

class Navigation extends Component{
    render() {
            return (
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Blockchain Votes
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav>
                        <IndexLinkContainer to="/">
                            <NavItem eventKey={ 1 } className="hvr-underline-from-left-white">Home</NavItem>
                        </IndexLinkContainer>
                        <LinkContainer to="/learnMore">
                            <NavItem eventKey={ 2 } className="hvr-underline-from-left-white">Learn More</NavItem>
                        </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            );
    }
};

export default Navigation;
