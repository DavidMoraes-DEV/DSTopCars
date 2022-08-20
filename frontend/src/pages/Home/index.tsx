import './styles.css';
import 'App.css';
import MainImage from 'assets/images/car-card.png';
import Button from 'components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="bg-primary base-card home-card">
        <div className="home-content-container">
          <h1>O CARRO PERFEITO PARA VOCÊ</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
        <div className="home-image-container">
          <img className="image-card" src={MainImage} alt="Main-Card" />
        </div>
      </div>
      <div className="base-card home-card-button">
        <p>Comece agora a navegar</p>
        <Link to={'/catalogo'}>
          <Button />
        </Link>
      </div>
    </div>
  );
};

export default Home;
