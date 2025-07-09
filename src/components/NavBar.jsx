import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand as={NavLink} to='/'><img src="../logo-thrive.png" alt="logotipo Thrive-3d" className='logo-navbar' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="align-items-end">
          <Nav className="ms-auto align-items-end">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/nosotros'>Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/category/Impresoras 3d'>Impresoras 3d</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/Filamentos'>Filamentos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/Modelos'>Modelos</NavDropdown.Item>
            </NavDropdown>
            <CartWidget />
          </Nav>
          <div className="text-end">

          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
