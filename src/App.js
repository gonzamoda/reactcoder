import "bootstrap/dist/css/bootstrap.min.css";
import NavBarMarket from "./components/NavBarMarket";
import SliderPrincipal from "./components/SliderPrincipal";

const App = () => {
  return (
    <>
      <NavBarMarket />
      <SliderPrincipal numeroDesafio="04" tituloDesafio="Estilos y Home" />
    </>
  );
};

export default App;
