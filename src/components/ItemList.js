import Item from "./Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Con el array de productos recibidos hago un map para mostrar cada elemento como <li>
//Cada item de la lista es un Item, al cual le paso la información por prop.

const ItemList = ({ productos }) => {
  return (
    <>
      <ul>
        <Container>
          <Row>
            {productos.map((element) => (
              <Col md="4">
                <li key={element.id}>
                  <Item
                    nombre={element.nombre}
                    descripcion={element.descripcion}
                    stock={element.stock}
                  />
                </li>
              </Col>
            ))}
          </Row>
        </Container>
      </ul>
    </>
  );
};

export default ItemList;
