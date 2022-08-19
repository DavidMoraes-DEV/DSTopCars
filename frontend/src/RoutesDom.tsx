import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Catalog from 'pages/Catalog';
import Home from 'pages/Home';

const RoutesDom = () => (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );

export default RoutesDom;
