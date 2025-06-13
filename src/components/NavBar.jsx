//NAVBAR NORMAL

// import CartWidget from "./CartWidget"
// import { NavLink } from "react-router-dom"

// const NavBar = () => {
//   return(
//   <nav className="nav-contain">
//     <NavLink to="/">Home</NavLink>
//     <NavLink to="Impresoras 3d">Impresoras 3d</NavLink>
//     <NavLink to="">2222</NavLink>
//     <NavLink to="">2222</NavLink>

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
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand as={NavLink} to='/'><img src="../logo-thrive.png" alt="logotipo Thrive-3d" className='logo-navbar' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/nosotros'>Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/category/Impresoras 3d'>
                Impresoras 3d
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/Filamentos'>Filamentos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/Modelos'>Modelos</NavDropdown.Item>
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
