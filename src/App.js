import "bootstrap/dist/css/bootstrap.min.css";
import NavBarMarket from "./components/NavBarMarket";
import SliderPrincipal from "./components/SliderPrincipal";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <NavBarMarket />
      <SliderPrincipal />
      <ItemListContainer />
    </>
  );
};

export default App;
