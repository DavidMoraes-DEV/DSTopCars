import './styles.css';
import ImageProduct from 'assets/images/carproduct.png';

const ProductCard = () => {
  return (
    <div className="base-card product-card-container">
      <div className="image-product-container">
        <img src={ImageProduct} alt="Audi Supra TT" />
      </div>
      <div className='card-content-container'>
        <h2>Audi Supra TT</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <button className="btn btn-primary">
          <h6>COMPRAR</h6>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
