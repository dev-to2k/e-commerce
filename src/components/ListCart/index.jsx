import { AddIcon, CloseIcon, MinusIcon } from '@chakra-ui/icons';
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
import { useSelector } from 'react-redux';

const ListCart = () => {
  const { cart } = useSelector((state) => state);
  const [quantity, setQuantity] = useState(1);

  if (quantity < 1) {
    setQuantity(1);
  }

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
            <Th>Remove</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cart.list.map((item, index) => (
            <Tr key={index}>
              <Td>
                <Flex alignItems="center">
                  <Image
                    boxSize="100px"
                    objectFit="cover"
                    src={item.image}
                    alt={item.title}
                    mr={3}
                  />
                  <strong>{item.title}</strong>
                </Flex>
              </Td>
              <Td>
                <Text>{item.price}</Text>
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
              <Td textAlign="center">{quantity * item.price}</Td>
              <Td textAlign="center">
                <CloseIcon />
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th isNumeric colSpan={5}>
              <strong>SubTotal:</strong> $12
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
};

export default ListCart;
