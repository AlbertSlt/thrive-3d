// import CartWidget from "./CartWidget"

// const NavBar = () => {
//   return(
//   <nav>
//     <a href="">2222</a>
//     <a href="">2222</a>
//     <a href="">2222</a>
//     <a href="">2222</a>

//     <CartWidget />
//   </nav>
//   )
// }
// export default NavBar

//NAVBAR BOOTSTRAP:

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { IoCartOutline } from "react-icons/io5";
import Badge from 'react-bootstrap/Badge';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Twitch 3d</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Impresoras 3d
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Filamentos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Modelos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <IoCartOutline />
       <Badge bg="success">5</Badge>
    </Navbar>
  )
}

export default NavBar
