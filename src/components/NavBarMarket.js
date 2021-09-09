import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";

const NavBarMarket = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Mercadeira</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/nosotros">
            Nosotros
          </Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/categoria/plantas">
              Plantas
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/categoria/macetas">
              Macetas
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/categoria/tierra">
              Tierra
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/">
              Todos los productos
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#pricing">Sucursales</Nav.Link>
        </Nav>
        <CartWidget />
        <Form inline>
          <FormControl
            type="text"
            placeholder="¿Qué estás buscando?"
            className="mr-sm-2"
          />
        </Form>
      </Navbar>
    </>
  );
};
export default NavBarMarket;
