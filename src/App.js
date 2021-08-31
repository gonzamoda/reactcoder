import "bootstrap/dist/css/bootstrap.min.css";
import NavBarMarket from "./components/NavBarMarket";
import SliderPrincipal from "./components/SliderPrincipal";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
    <>
      <NavBarMarket />
      <SliderPrincipal />
      <ItemDetailContainer />
      <ItemListContainer />
    </>
  );
};

export default App;
