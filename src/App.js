import "bootstrap/dist/css/bootstrap.min.css";
import NavBarMarket from "./components/NavBarMarket";
import SliderPrincipal from "./components/SliderPrincipal";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import CartContext from "./components/CartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CartContext>
        <NavBarMarket />
        <SliderPrincipal />
        <Switch>
          <Route path="/" component={ItemListContainer} exact />
          <Route path="/categoria/:categoria" component={ItemListContainer} />
          <Route
            path="/productos/detalles/:id"
            component={ItemDetailContainer}
          />
          <Route path="/Cart" component={Cart} />
        </Switch>
      </CartContext>
    </BrowserRouter>
  );
};

export default App;
