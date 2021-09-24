import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { firestore } from "./firebase";

const ItemDetailContainer = () => {
  const [dataShow, setDataShow] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const db = firestore;
    const collection = db.collection("productos");
    const query = collection.get();
    query.then((snapshot) => {
      const docs = snapshot.docs;

      const productos = [];

      docs.forEach((doc) => {
        const docSnapshot = doc;

        const productoConId = { ...docSnapshot.data(), id: docSnapshot.id };
        productos.push(productoConId);
      });

      let itemSeleccionado = productos.filter((p) => p.id === id);
      setDataShow(...itemSeleccionado);
    });
  }, [id]);

  return dataShow.length === 0 ? (
    <Container>
      <Row className="spinner">
        <Spinner animation="border" variant="success" />
      </Row>
    </Container>
  ) : (
    <>
      <ItemDetail productoDetalle={dataShow} />
    </>
  );
};

export default ItemDetailContainer;
