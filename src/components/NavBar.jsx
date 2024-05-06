import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return( 
        <Navbar bg="primary" className="container-fluid" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home">MVP Shop</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link to="/category/zapatillas" as={NavLink}>Zapatillas</Nav.Link>
            <Nav.Link to="/category/remeras" as={NavLink}>Remeras</Nav.Link>
            </Nav>
            <CartWidget />
        </Container>
    </Navbar>
    );
};