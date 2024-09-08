
import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product'; // Ensure this path is correct
import LoginSignup from './pages/LoginSignup'; // Ensure this path is correct
import Cart from './pages/Cart'; // Ensure this path is correct
import Footer from './components/Footer/Footer';
import elec_banner from './components/Assets/elecbanner.jpg';
import sports_banner from './components/Assets/sp.jpg';
import playarea_banner from './components/Assets/play.jpg';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory  banner={elec_banner} category="sports" />} />
          <Route path='/womens' element={<ShopCategory banner={sports_banner} category="electronic toys" />} />
          <Route path='/kids' element={<ShopCategory banner={playarea_banner} category="playarea" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;