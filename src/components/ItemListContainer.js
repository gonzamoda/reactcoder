import { useEffect, useState } from "react";
import ItemList from "./ItemList";

//Creo una Promise que devuelve el array de productos

const promiseEjercicio = () => {
  return new Promise((res, rej) => {
    setTimeout(
      () =>
        res([
          {
            id: 29,
            destacado: true,
            nombre: "ficus",
            descripcion:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repudiandae harum dignissimos quo labore excepturi aperiam, nemo perspiciatis ipsum aliquam recusandae aspernatur fuga consectetur tempore distinctio sequi cumque. Ipsam, reiciendis.",
            stock: 10,
          },
          {
            id: 30,
            destacado: true,
            nombre: "bonsai",
            descripcion:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repudiandae harum dignissimos quo labore excepturi aperiam, nemo perspiciatis ipsum aliquam recusandae aspernatur fuga consectetur tempore distinctio sequi cumque. Ipsam, reiciendis.",
            stock: 10,
          },
          {
            id: 31,
            destacado: false,
            nombre: "alocasia",
            descripcion:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repudiandae harum dignissimos quo labore excepturi aperiam, nemo perspiciatis ipsum aliquam recusandae aspernatur fuga consectetur tempore distinctio sequi cumque. Ipsam, reiciendis.",
            stock: 10,
          },
          {
            id: 32,
            destacado: false,
            nombre: "olmo",
            descripcion:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repudiandae harum dignissimos quo labore excepturi aperiam, nemo perspiciatis ipsum aliquam recusandae aspernatur fuga consectetur tempore distinctio sequi cumque. Ipsam, reiciendis.",
            stock: 10,
          },
          {
            id: 33,
            destacado: false,
            nombre: "parra",
            descripcion:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repudiandae harum dignissimos quo labore excepturi aperiam, nemo perspiciatis ipsum aliquam recusandae aspernatur fuga consectetur tempore distinctio sequi cumque. Ipsam, reiciendis.",
            stock: 8,
          },
          {
            id: 34,
            destacado: false,
            nombre: "cactus",
            descripcion:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repudiandae harum dignissimos quo labore excepturi aperiam, nemo perspiciatis ipsum aliquam recusandae aspernatur fuga consectetur tempore distinctio sequi cumque. Ipsam, reiciendis.",
            stock: 8,
          },
        ]),
      3000
    );
  });
};

const ItemListContainer = () => {
  const [dataShow, setDataShow] = useState([]);

  useEffect(() => {
    promiseEjercicio().then((data) => {
      setDataShow(data);
    });
  }, []);

  //Mientras se ejecuta la Promise en la pagina se muestra "Cargando..."
  //Una vez terminada la Promise se muestra ItemList
  //Le envío el array de productos a ItemList por Props

  return dataShow.length === 0 ? (
    <h1>Cargando...</h1>
  ) : (
    <>
      <ItemList productos={dataShow} />
    </>
  );
};

export default ItemListContainer;
