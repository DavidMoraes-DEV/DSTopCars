import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-info main-nav">
      <div className="container-fluid container-nav">
        <Link to={'/'} className="nav-logo-text">
          <h4>Top Cars</h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dstopcars-navbar"
          aria-controls="dstopcars-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="dstopcars-navbar"
        >
          <ul className="navbar-nav main-menu">
            <li>
              <NavLink className={(navData) => (navData.isActive ? 'active' : '')} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={(navData) => (navData.isActive ? 'active' : '')} to="/catalogo">
                Catálogo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
