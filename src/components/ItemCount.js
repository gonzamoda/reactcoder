import Button from "react-bootstrap/Button";
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

  const agregar = () => {
    if (stock > 0) {
      onAdd(estado);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
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
          onClick={agregar}
        >
          Agregar al Carrito
        </Button>
      </Container>
    </>
  );
};

export default ItemCount;
