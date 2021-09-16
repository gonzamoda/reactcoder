import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCount from "./ItemCount";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ productoDetalle }) => {
  const ButtonIr = () => {
    return (
      <Button as={Link} to="/cart">
        Ir al carrito
      </Button>
    );
  };

  const [inputType, setInputType] = useState("botonItemCount");

  const onAdd = () => {
    setInputType("botonIrCarrito");
  };

  return (
    <Container>
      <Row>
        <Col md="4">
          <div>
            <img src={productoDetalle.img} alt={productoDetalle.nombre} />
            <h1>{productoDetalle.nombre}</h1>
            <p>{productoDetalle.descripcion}</p>
            <h2>${productoDetalle.precio}</h2>
          </div>

          <div>
            {inputType === "botonItemCount" ? (
              <ItemCount
                stock={productoDetalle.stock}
                initial={1}
                onAdd={onAdd}
              />
            ) : (
              <ButtonIr />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
