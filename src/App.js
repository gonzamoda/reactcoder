import "bootstrap/dist/css/bootstrap.min.css";
import NavBarMarket from "./components/NavBarMarket";
import SliderPrincipal from "./components/SliderPrincipal";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import CartContext from "./components/CartContext";
import User from "./components/User";
import Gracias from "./components/Gracias";

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
          <Route path="/cart" component={Cart} />
          <Route path="/user" component={User}></Route>
          <Route path="/gracias" component={Gracias}></Route>
        </Switch>
      </CartContext>
    </BrowserRouter>
  );
};

export default App;
