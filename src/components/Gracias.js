import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Gracias = () => {
  return (
    <>
      <h1>Gracias por su compra</h1>
      <Button as={Link} to="/">
        Seguir Comprando
      </Button>
    </>
  );
};

export default Gracias;
