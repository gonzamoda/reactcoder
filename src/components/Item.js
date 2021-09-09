import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({ nombre, imagen, descripcion, stock, precio, id }) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Card.Subtitle>${precio}</Card.Subtitle>
          <Link to={`/productos/detalles/${id}`}>VER MÁS</Link>
          <ItemCount stock={stock} initial={1} onAdd={() => {}} />
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
