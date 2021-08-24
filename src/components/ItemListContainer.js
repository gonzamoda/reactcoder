import ItemCount from "./ItemCount";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const ItemListContainer = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <ItemCount
            stock={5}
            onAdd={(cantidad) => {
              console.log(cantidad);
            }}
            initial={1}
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ItemCount
            stock={4}
            onAdd={(cantidad) => {
              console.log(cantidad);
            }}
            initial={1}
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ItemCount
            stock={7}
            onAdd={(cantidad) => {
              console.log(cantidad);
            }}
            initial={1}
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ItemCount
            stock={0}
            onAdd={(cantidad) => {
              console.log(cantidad);
            }}
            initial={1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ItemListContainer;
