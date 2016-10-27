import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import GameSwitch from './game/components/GameSwitch';

export default function() {

    return (
        <Navbar inverse fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">RPG Cheat Sheet</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <GameSwitch/>
                </Nav>
                <Nav pullRight>
                    <NavItem href="https://github.com/ulrichsg/rpg-cheat-sheet">GitHub</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
