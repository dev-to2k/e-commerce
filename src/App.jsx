import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';
import LoginPage from './pages/Admin/loginPage';
import CartPage from './pages/cart';
import HomePage from './pages/home';
import ProductsPage from './pages/products';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getNewProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://fakestoreapi.com/products');
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getNewProducts();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route
            index
            element={<HomePage data={data} isLoading={isLoading} />}
          />
          <Route
            path="products"
            element={<ProductsPage data={data} isLoading={isLoading} />}
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="admin" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
