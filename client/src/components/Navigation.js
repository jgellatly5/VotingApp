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
                </Navbar>
            );
    }
};

export default Navigation;
