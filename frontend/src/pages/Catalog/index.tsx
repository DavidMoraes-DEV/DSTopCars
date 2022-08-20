import './styles.css';
import ProductCard from 'components/ProductCard';

const Catalog = () => {
  return (
    <div className='products-container'>
      <div className="base-card card-search">
        <div className="search-bar">
          <h6>Digite sua busca</h6>
        </div>
        <button className="btn btn-primary button-search-container">
          <h6>BUSCAR</h6>
        </button>
      </div>
      <div className="container my-4">
        <div className="row products-catalog">
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
