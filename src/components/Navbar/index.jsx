import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './index.css';
import VenganPues from '../../assets/iconoVenganPues.png'

const NavBar = () => {
    return (
        <Navbar className='NavBar-Container g-lg-5' expand='md'>
            <Navbar.Brand href="#home"><img className='custom-navbar' src={VenganPues} alt="VenganPues" ></img> <span className='tiltuloVenganPues'>Vengan Pues</span> </Navbar.Brand>
            <Navbar.Toggle>
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse className='justify-content-end'>
                <Nav className='d-flex gap-4'>
                    <NavDropdown title="Apartamentos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#"><span className='menu-letras'>Apartamento 1</span></NavDropdown.Item>
                        <NavDropdown.Item href="#"><span className='menu-letras'>Apartamento 2</span></NavDropdown.Item>
                        <NavDropdown.Item href="#"><span className='menu-letras'>Apartamento 3</span></NavDropdown.Item>
                        <NavDropdown.Item href="#"><span className='menu-letras'>Apartamento 4</span></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#"><span className='menu-letras'>Tarifas</span></Nav.Link>
                    <Nav.Link href="#"><span className='menu-letras'>Realizar pago</span></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;