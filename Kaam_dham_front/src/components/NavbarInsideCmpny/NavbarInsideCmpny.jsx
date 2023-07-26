// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavbarInsideCmpny.css";

function NavBarInsideCmpny() {
  const navigate = useNavigate();
  const brandNameClick = () => {
    navigate("/HomePage_Company");
  };
  return (
    <Navbar expand="lg" className="navbar" fixed="top">
      <Container>
        <div>
          <Navbar.Brand
            onClick={brandNameClick}
            className="text-2xl font-medium"
            href="#home"
          >
            Kaam-Dhaam
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto md:pt-[3px] font-medium text-black">
            <Nav.Link href="/HomePage_Company">Home</Nav.Link>
            <Nav.Link href="/Notification_Page">Notifications</Nav.Link>
            <Nav.Link href="/Search_Page">Search</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}

            <div className=" ">
              <NavDropdown
                className="font-semibold text-black"
                title="Profile"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.2">
                  Edit Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
                <NavDropdown.Divider />
                {/* <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarInsideCmpny;
