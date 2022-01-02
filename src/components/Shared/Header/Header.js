
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" className='nav-bar' variant="light">
                <Container>
                    <Navbar.Brand href="#home" className="justify-content-start text-white">
                        <p className="navs-link">Decore 'n crafts</p>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className=" justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" ><p className="nav-style fs-5 fw-bold text-decoration-none">Home</p></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#Products"><p className="nav-style fs-5 fw-bold text-decoration-none">Products</p></Nav.Link>
                        <Nav.Link as={Link} to="/explore"><p className="nav-style fs-5 fw-bold text-decoration-none">Explore</p></Nav.Link>
                        {user?.email ?
                            <Nav>
                                <Nav.Link as={Link} to="/dashboard"><p className="nav-style fs-5 fw-bold text-decoration-none">Dashboard</p></Nav.Link>
                                <Nav.Link onClick={logOut} className="nav-style fs-5 fw-bold text-decoration-none" >Logout</Nav.Link>

                            </Nav> :
                            <Link to="/login">
                                <p className="nav-style fs-5 fw-bold text-decoration-none">LogIn</p>
                            </Link>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;