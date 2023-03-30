import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './index.css';
import VenganPues from '../../assets/iconoVenganPues.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const apartamentos = useSelector(state => state.apartamentos);

    const apartamentosDropdown = apartamentos.map(apartamento => (
        <NavDropdown.Item key={apartamento.id} href="#">
            <Link to={`/apartamentos/${apartamento._id}`} >
                <span className='menu-letras'>Apartamento {apartamento.numeroApartamento}</span>
            </Link>
        </NavDropdown.Item>
    ));

    return (
        <Navbar className='NavBar-Container mx-5 mt-0 g-lg-5' expand='md'>
            <Navbar.Brand href="/">
                <img className='custom-navbar' src={VenganPues} alt="VenganPues" /> <span className='tiltuloVenganPues'>Vengan Pues...</span>
            </Navbar.Brand>
            <Navbar.Toggle>
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse className='justify-content-end'>
                <Nav className='d-flex gap-4'>
                    <NavDropdown title="Apartamentos" id="basic-nav-dropdown">
                        {apartamentosDropdown}
                    </NavDropdown>
                    <Nav.Link href="#"><span className='menu-letras'>Tarifas</span></Nav.Link>
                    <Nav.Link href="#"><span className='menu-letras'>Realizar pago</span></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;
