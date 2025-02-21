import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "/src/style.css"; 

const NavbarComponent = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleLogout = () => {
    localStorage.removeItem("user"); 
    setIsAuthenticated(false); 
    navigate("/"); 
    window.location.reload(); 
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/726/726476.png"
            alt="Logo"
            className="nav-logo"
          />
          Auction App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!isAuthenticated ? (
              location.pathname === "/" ? (
                <>
                  <Nav.Link as={Link} to="/signin" className="nav-link-custom">
                    Sign In
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup" className="nav-link-custom">
                    Sign Up
                  </Nav.Link>
                </>
              ) : null
            ) : (
              <>
                <Nav.Link as={Link} to="/dashboard" className="nav-link-custom">
                  Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/post-auction" className="nav-link-custom">
                  Post Auction
                </Nav.Link>
                <Nav.Link as={Link} to="/watchlist" className="nav-link-custom">
                  Watchlist
                </Nav.Link>
                <Nav.Link as={Link} to="/notifications" className="nav-link-custom">
                  Notifications
                </Nav.Link>
                <Nav.Link as={Link} to="/profile" className="nav-link-custom">
                  Profile
                </Nav.Link>
                <Button variant="outline-danger" className="logout-btn" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
