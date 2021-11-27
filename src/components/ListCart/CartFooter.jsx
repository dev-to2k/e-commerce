import { Text, Th, Tr } from '@chakra-ui/react';
import React from 'react'

const CartFooter = ({listCart}) => {
  return (
    <Tr>
      <Th isNumeric colSpan={5}>
        {listCart.length === 0 ? (
          <Text>Total: 0</Text>
        ) : (
          <Text>
            Total:
            {listCart.reduce((total, item) => {
              return parseFloat(total + item.price * item.quantity).toFixed(2);
            }, 0)}
          </Text>
        )}
      </Th>
    </Tr>
  );
}

export default CartFooter
