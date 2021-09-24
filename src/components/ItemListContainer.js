import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { firestore } from "./firebase";

const ItemListContainer = () => {
  const [dataShow, setDataShow] = useState([]);

  const { categoria } = useParams();

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

      let resultadoCategoria;
      if (categoria) {
        resultadoCategoria = productos.filter((p) => p.categoria === categoria);
      } else {
        resultadoCategoria = productos;
      }

      setDataShow(resultadoCategoria);
    });
  }, [categoria]);

  return dataShow.length === 0 ? (
    <>
      <Container>
        <Row className="spinner">
          <Spinner animation="border" variant="success" />
        </Row>
      </Container>
    </>
  ) : (
    <>
      <ItemList key={dataShow.id} productos={dataShow} />
    </>
  );
};

export default ItemListContainer;
