
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hook/useAuth';


const Header = () => {
  const { user, Logout } = useAuth();
  return (
    <div>
      <Navbar  bg="secondary" expand="lg">
        <Container>
          <Navbar.Brand className="fw-bold text-white fs-2" as={HashLink} to="/home">Wahi-Tavel</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto  fw-bold">
              <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
              <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
              <Nav.Link as={HashLink} to="/myBooking">My Booking</Nav.Link>
              {user?.email && <Nav.Link as={HashLink} to="/manageAllBooking">Manage All Booking</Nav.Link>}
              {user?.email && <Nav.Link href="/addService">Add New Service</Nav.Link>}
              <Nav.Link><span className="text-white">{user?.displayName}</span></Nav.Link>
              {user?.email && <Nav.Link>LogIn By: <span className="text-danger fw-bold">{user?.email}</span></Nav.Link>}
              {user?.email ? <button onClick={Logout} className="btn border-0 btn-info text-white ">Logout</button> :
                <Nav.Link className="btn btn-info text-white border-0 " as={Link} to="/login">Login</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;