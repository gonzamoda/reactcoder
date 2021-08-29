import bonsai01 from "../images/bonsai01.jpg";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";

//Acá pongo la información que quiero mostrar de cada item del array de productos.

const Item = ({ nombre, descripcion, stock }) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={bonsai01} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <ItemCount stock={stock} initial={1} onAdd={() => {}} />
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
