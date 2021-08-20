import Carousel from "react-bootstrap/Carousel";
import slider01 from "../images/slider01.jpg";

const SliderPrincipal = ({ numeroDesafio, tituloDesafio }) => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={slider01} alt="First slide" />
        <Carousel.Caption>
          <h3>Gonzalo Modarelli</h3>
          <p>
            Desafío Clase {numeroDesafio} - {tituloDesafio}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default SliderPrincipal;
