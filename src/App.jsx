import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Shared/Footer';
import Home from './components/Home';
import Navbar from './components/Shared/Navbar';
import NotFound from './components/NotFound';
import Products from './components/Products';
import HomePage from './pages/home';
import CartPage from './pages/cart';
import ProductsPage from './pages/products';

function App() {
  const [data, setData] = useState([]);

  const getNewProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNewProducts();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage data={data} />} />
          <Route path="products" element={<ProductsPage data={data} />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
