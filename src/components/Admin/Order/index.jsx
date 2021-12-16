import React, { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../database/config';
import '../../../styles/table.scss';

const getOrders = async () => {
  const querySnapshot = await getDocs(collection(db, 'orders'));
  var orders = [];
  querySnapshot.forEach(doc => {
    orders.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return orders;
};

const Order = () => {
  const [orders, setOrders] = React.useState([]);
  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res);
    });
  }, []);

  console.log(orders);

  return (
    <table className='styled-table'>
      <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Products</th>
        <th>Total</th>
      </tr>
      </thead>
      <tbody>
      {
        orders.map((item) => (
          <tr key={item.id}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.address}</td>
            <td>
              <ul>
                {
                  item.products.map((product) => (
                    <li key={product.id} className='flex'>
                      <img src={product.image} alt={product.title} />
                      <span>
                        {product.title}
                      </span>
                    </li>
                  ))
                }
              </ul>
            </td>
          </tr>
        ))
      }
      </tbody>
    </table>
  );
};

export default Order;