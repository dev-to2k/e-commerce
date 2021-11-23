import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const ListCart = () => {
  const [listCart, setListCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  if (quantity < 1) {
    setQuantity(1);
  }

  const totalPrice = quantity * 10;

  const styleQuantity = {
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  };

  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Price</Th>
            <Th textAlign="center">Quantity</Th>
            <Th isNumeric>TotalPrice</Th>
          </Tr>
        </Thead>
        <Tbody>
          {listCart.map((item, index) => (
            <Tr key={index}>
              <Td>
                <Flex alignItems="center">
                  <Image
                    boxSize="100px"
                    objectFit="cover"
                    src="https://bit.ly/sage-adebayo"
                    alt="Segun Adebayo"
                    mr={3}
                  />
                  <strong>name product</strong>
                </Flex>
              </Td>
              <Td>
                <Text>1</Text>
              </Td>
              <Td isNumeric>
                <Flex style={{ gap: '.5rem' }}>
                  <Button
                    colorScheme="red"
                    onClick={() => setQuantity(quantity - 1)}
                  >
                    <MinusIcon />
                  </Button>
                  <Text style={styleQuantity}>{quantity}</Text>
                  <Button
                    colorScheme="green"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <AddIcon />
                  </Button>
                </Flex>
              </Td>
              <Td isNumeric>{totalPrice}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th isNumeric colSpan={4}>
              <strong>SubTotal:</strong> $12
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
};

export default ListCart;
