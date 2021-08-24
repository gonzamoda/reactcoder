import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import bonsai01 from "../images/bonsai01.jpg";
import { useEffect } from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [estado, setContador] = useState(initial);

  const sumarContador = () => {
    if (estado < stock) {
      setContador(estado + 1);
    }
  };

  const restarContador = () => {
    if (estado > 1) {
      setContador(estado - 1);
    }
  };

  const agregarCarrito = () => {
    if (stock > 0) {
      onAdd(estado);
    }
  };

  useEffect(() => {}, []);

  if (stock > 0) {
    return (
      <Card>
        <Card.Img variant="top" src={bonsai01} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Container fluid>
            <Row className="contadorItem">
              <Col>
                <Button className="botonMasMenos" onClick={sumarContador}>
                  {" "}
                  +{" "}
                </Button>
              </Col>
              <Col>
                <p>{estado}</p>
              </Col>
              <Col>
                <Button className="botonMasMenos" onClick={restarContador}>
                  {" "}
                  -{" "}
                </Button>
              </Col>
            </Row>
          </Container>
          <Container fluid>
            <Button
              className="botonAgregarCarrito"
              variant="primary"
              onClick={agregarCarrito}
            >
              Agregar al Carrito
            </Button>
          </Container>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <Card>
        <Card.Img variant="top" src={bonsai01} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Container fluid>
            <Row className="contadorItem">
              <Col>
                <Button
                  disabled
                  className="botonMasMenos"
                  onClick={sumarContador}
                >
                  {" "}
                  +{" "}
                </Button>
              </Col>
              <Col>
                <p>{estado}</p>
              </Col>
              <Col>
                <Button
                  disabled
                  className="botonMasMenos"
                  onClick={restarContador}
                >
                  {" "}
                  -{" "}
                </Button>
              </Col>
            </Row>
          </Container>
          <Container fluid>
            <Button
              disabled
              className="botonAgregarCarrito"
              variant="primary"
              onClick={agregarCarrito}
            >
              Agregar al Carrito
            </Button>
          </Container>
        </Card.Body>
      </Card>
    );
  }
};

export default ItemCount;
