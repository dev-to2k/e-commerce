import { Table, Tbody, Td, Text, Tfoot, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import CartBody from './CartBody';
import CartFooter from './CartFooter';
import CartHead from './CartHead';
import ClearCart from './ClearCart';

const styleQuantity = {
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
};

const ListCart = () => {
  let { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <Table variant="simple" height="100%">
        <Thead>
          {cartItems.length > 0 && <ClearCart />}
          <CartHead />
        </Thead>
        <Tbody>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <React.Fragment key={item.id}>
                <CartBody item={item} styleQuantity={styleQuantity} />
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
          <CartFooter listCart={cartItems} />
        </Tfoot>
      </Table>
    </>
  );
};

export default ListCart;
