import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default function() {
    return (
        <Navbar inverse fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">RPG Cheat Sheet</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="https://github.com/ulrichsg/rpg-cheat-sheet">GitHub</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
