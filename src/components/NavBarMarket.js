import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBarMarket = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Mercadeira</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Nosotros</Nav.Link>

          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Plantas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Macetas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Tierra</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Todos los productos
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#pricing">Sucursales</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="¿Qué estás buscando?"
            className="mr-sm-2"
          />
          <Button variant="outline-info">Buscar</Button>
        </Form>
      </Navbar>
    </>
  );
};
export default NavBarMarket;
