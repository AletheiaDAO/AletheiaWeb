import React, { FC } from 'react';

import { Navbar, Container, Nav } from 'react-bootstrap';

// interface HeaderPropos {
//     header: string;
// }

const Header: FC = () => {
    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/home">Aletheia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header