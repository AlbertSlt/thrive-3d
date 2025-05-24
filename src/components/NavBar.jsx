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
import CartWidget from './CartWidget';


function NavBar() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home"><img src="../public/logo-thrive.png" alt="logotipo Thrive-3d" className='logo-navbar' /></Navbar.Brand>
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
          <div>
          <CartWidget />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
