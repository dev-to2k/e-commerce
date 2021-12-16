import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Shared/Navbar';
import LoginPage from './pages/Admin/loginPage';
import CartPage from './pages/cart';
import HomePage from './pages/home';
import ProductsPage from './pages/products';
import NotFound from './components/NotFound';
import Footer from './components/Shared/Footer';
import AdminPage from './pages/Admin/AdminPage';
import FormProduct from './components/Admin/FormProduct';
import Dashboard from './components/Admin/Dashboard';
import Order from './components/Admin/Order';

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
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route
            index
            element={<HomePage data={data} isLoading={isLoading} />}
          />
          <Route
            path='products'
            element={<ProductsPage data={data} isLoading={isLoading} />}
          />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='admin' element={<AdminPage />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='form' element={<FormProduct />} />
            <Route path='orders' element={<Order />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
