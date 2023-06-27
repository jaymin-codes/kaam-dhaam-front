/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  const navigate = useNavigate();
  const brandNameClick = () => {
    navigate("/");
  };
  const signInClick = () => {
    navigate("/login")
  }

  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}>
    <Navbar expand="lg" className='bg-[#5fc2ef]'>
      <Container fluid>
        <Navbar.Brand href="#" className='text-3xl font-medium pt-2 pl-2' onClick={brandNameClick}>Kaam-Dhaam</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 font-medium"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">About</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            <Nav.Link href="#action2">Career</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Career</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#" disabled>
              Community
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
            <Button onClick={signInClick} className='mx-3 font-semibold bg-[#3F51B5] text-white  hover:bg-[#3f51b5df]'>Sign In</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </motion.div>
  );
}

export default NavBar;