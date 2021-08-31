import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemDetail = ({ productoDetalle }) => {
  return (
    <Container>
      <Row>
        <Col md="6">
          <div>
            <img src={productoDetalle.img} alt={productoDetalle.nombre} />
            <h1>{productoDetalle.nombre}</h1>
            <p>{productoDetalle.descripcion}</p>
            <h2>${productoDetalle.precio}</h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
