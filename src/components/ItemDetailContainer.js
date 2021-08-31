import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const promiseDetail = () => {
  return new Promise((res, rej) => {
    setTimeout(
      () =>
        res({
          id: 50,
          destacado: true,
          img: "https://bonsaitonight.com/wp-content/uploads/2016/08/DSC0104-S-1.jpg",
          nombre: "Bonsai",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repudiandae harum dignissimos quo labore excepturi aperiam, nemo perspiciatis ipsum aliquam recusandae aspernatur fuga consectetur tempore distinctio sequi cumque. Ipsam, reiciendis.",
          stock: 10,
          precio: 2650,
        }),
      2000
    );
  });
};

const ItemDetailContainer = () => {
  const [dataShow, setDataShow] = useState([]);
  useEffect(() => {
    promiseDetail().then((data) => {
      setDataShow(data);
    });
  }, []);

  //Mientras se ejecuta la Promise en la pagina se muestra "Cargando..."
  //Una vez terminada la Promise se muestra ItemDetail
  //Le envío el producto a ItemDetail por Props

  return dataShow.length === 0 ? (
    <h1>Cargando...</h1>
  ) : (
    <>
      <ItemDetail key={dataShow.id} productoDetalle={dataShow} />
    </>
  );
};

export default ItemDetailContainer;
