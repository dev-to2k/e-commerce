import { Th, Tr } from '@chakra-ui/react';
import React from 'react'

const CartHead = () => {
  return (
    <Tr>
      <Th>Image</Th>
      <Th>Price</Th>
      <Th textAlign="center">Quantity</Th>
      <Th isNumeric>Subtotal</Th>
      <Th>Remove</Th>
    </Tr>
  );
}

export default CartHead
