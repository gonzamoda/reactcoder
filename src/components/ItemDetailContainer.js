import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";

const promiseDetail = () => {
  return new Promise((res, rej) => {
    setTimeout(
      () =>
        res([
          {
            id: 29,
            destacado: true,
            nombre: "Ficus",
            categoria: "plantas",
            img: "https://microplantstudio.com/wp-content/uploads/2018/05/ficus.jpg",
            descripcion:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repudiandae harum dignissimos quo labore excepturi aperiam, nemo perspiciatis ipsum aliquam recusandae aspernatur fuga consectetur tempore distinctio sequi cumque. Ipsam, reiciendis.",
            stock: 10,
            precio: 2650,
          },
          {
            id: 30,
            destacado: true,
            nombre: "Bonsai",
            categoria: "plantas",
            img: "http://bonsaitonight.com/wp-content/uploads/2017/09/red-pine-bonsai.jpg",
            descripcion:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repudiandae harum dignissimos quo labore excepturi aperiam, nemo perspiciatis ipsum aliquam recusandae aspernatur fuga consectetur tempore distinctio sequi cumque. Ipsam, reiciendis.",
            stock: 10,
            precio: 2650,
          },
          {
            id: 31,
            destacado: false,
            nombre: "Alocasia",
            categoria: "plantas",
            img: "https://www.plantandpot.nz/wp-content/uploads/2019/11/Elephant-Ears-Alocasia-Plant.jpg",
            descripcion:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repudiandae harum dignissimos quo labore excepturi aperiam, nemo perspiciatis ipsum aliquam recusandae aspernatur fuga consectetur tempore distinctio sequi cumque. Ipsam, reiciendis.",
            stock: 10,
            precio: 2650,
          },
          {
            id: 32,
            destacado: false,
            nombre: "Pandurata",
            categoria: "plantas",
            img: "https://cdn.shopify.com/s/files/1/0062/0521/0712/products/Ficus_pandurata-lyrata_maceta_azul_1200x1200.jpg?v=1593402446",
            descripcion:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repudiandae harum dignissimos quo labore excepturi aperiam, nemo perspiciatis ipsum aliquam recusandae aspernatur fuga consectetur tempore distinctio sequi cumque. Ipsam, reiciendis.",
            stock: 10,
            precio: 2650,
          },
          {
            id: 33,
            destacado: false,
            nombre: "Maceta de barro",
            categoria: "macetas",
            img: "https://newcastlebeach.org/images/una-maceta-vacia-png-7.png",
            descripcion:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repudiandae harum dignissimos quo labore excepturi aperiam, nemo perspiciatis ipsum aliquam recusandae aspernatur fuga consectetur tempore distinctio sequi cumque. Ipsam, reiciendis.",
            stock: 8,
            precio: 2650,
          },
          {
            id: 34,
            destacado: false,
            nombre: "Abono",
            categoria: "tierra",
            img: "https://www.newearthcompost.com/wp-content/uploads/2018/08/new-earth-humus-compost-hand.jpg",
            descripcion:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repudiandae harum dignissimos quo labore excepturi aperiam, nemo perspiciatis ipsum aliquam recusandae aspernatur fuga consectetur tempore distinctio sequi cumque. Ipsam, reiciendis.",
            stock: 8,
            precio: 2650,
          },
        ]),
      1000
    );
  });
};

const ItemDetailContainer = () => {
  const [dataShow, setDataShow] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    promiseDetail().then((resultadoDetalle) => {
      let itemSeleccionado = resultadoDetalle.filter(
        (p) => p.id === parseInt(id)
      );
      setDataShow(...itemSeleccionado);
    });
  }, [id]);

  return dataShow.length === 0 ? (
    <h1>Cargando...</h1>
  ) : (
    <>
      <ItemDetail key={dataShow.id} productoDetalle={dataShow} />
    </>
  );
};

export default ItemDetailContainer;
