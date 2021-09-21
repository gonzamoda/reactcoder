import { createContext, useState } from "react";

export const contexto = createContext();

const { Provider } = contexto;

const CartContext = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addProduct = (producto) => {
    if (isInCart(producto.id)) {
      const nuevaCantidad = producto.cantidad.estado;
      // console.log(nuevaCantidad);

      const productoViejo = carrito.find((producto) => producto.id);

      const cantidadVieja = productoViejo.cantidad.estado;
      // console.log(cantidadVieja);

      productoViejo.cantidad.estado = nuevaCantidad + cantidadVieja;

      console.log(productoViejo.cantidad.estado);

      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const removeProduct = (id) => {
    const nuevoEstadoCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(nuevoEstadoCarrito);
  };

  const clear = () => {
    setCarrito([]);
  };

  const isInCart = (id) => {
    return carrito.find((producto) => producto.id === id);
  };

  const contexto = { carrito, addProduct, clear, removeProduct };

  console.log(carrito);

  return <Provider value={contexto}>{children}</Provider>;
};
export default CartContext;
