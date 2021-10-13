import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Item = ({ nombre, imagen, descripcion, stock, precio, id }) => {
  return (
    <>
      <Card className="itemCard">
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Subtitle>${precio}</Card.Subtitle>
          <Button variant="success" as={Link} to={`/productos/detalles/${id}`}>
            VER MÁS
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
