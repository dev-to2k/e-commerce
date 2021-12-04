import { Table, Tbody, Td, Text, Tfoot, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartBody from './CartBody';
import CartFooter from './CartFooter';
import CartHead from './CartHead';
import ClearCart from './ClearCart';

// const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'));

const ListCart = () => {
  let {
    cart: { list },
  } = useSelector((state) => state);
  const [listCart, setListCart] = useState([...list]);

  useEffect(() => {
    const newList = list.map((item) => {
      return { ...item, quantity: 1 };
    });

    setListCart([...newList]);
  }, [list]);

  const styleQuantity = {
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  };

  const increaseQuantity = (item) => {
    const { id } = item;
    setListCart(
      listCart.map((item) => {
        if (item.id === id) {
          item.quantity += 1;
        }
        return item;
      })
    );
  };

  const decreaseQuantity = (item) => {
    const { id } = item;
    setListCart(
      listCart.map((item) => {
        if (item.id === id) {
          item.quantity -= 1;
        }
        if (item.quantity < 1) {
          item.quantity = 1;
        }
        return item;
      })
    );
  };

  return (
    <>
      <Table variant="simple" height="100%">
        <Thead>
          {listCart.length > 0 && <ClearCart />}
          <CartHead />
        </Thead>
        <Tbody>
          {listCart.length > 0 ? (
            listCart.map((item) => (
              <React.Fragment key={item.id}>
                <CartBody
                  item={item}
                  styleQuantity={styleQuantity}
                  decreaseQuantity={decreaseQuantity}
                  increaseQuantity={increaseQuantity}
                />
              </React.Fragment>
            ))
          ) : (
            <Tr>
              <Td colSpan={5} textAlign="center">
                <Text fontWeight="bold" color="gray.600">
                  No item in cart
                </Text>
              </Td>
            </Tr>
          )}
        </Tbody>
        <Tfoot>
          <CartFooter listCart={listCart} />
        </Tfoot>
      </Table>
    </>
  );
};

export default ListCart;
