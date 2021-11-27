import { AddIcon, CloseIcon, MinusIcon } from '@chakra-ui/icons';
import { Button, Flex, Image, Td, Text, Tr } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';

const CartBody = ({
  item,
  styleQuantity,
  decreaseQuantity,
  increaseQuantity,
}) => {
  const dispatch = useDispatch();
  return (
    <Tr>
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
          <Button colorScheme="red" onClick={() => decreaseQuantity(item)}>
            <MinusIcon />
          </Button>
          <Text style={styleQuantity}>{item.quantity}</Text>
          <Button colorScheme="green" onClick={() => increaseQuantity(item)}>
            <AddIcon />
          </Button>
        </Flex>
      </Td>
      <Td textAlign="center">{(item.quantity * item.price).toFixed(2)}</Td>
      <Td textAlign="center">
        <Button onClick={() => dispatch(removeFromCart(item.id))}>
          <CloseIcon />
        </Button>
      </Td>
    </Tr>
  );
};

export default CartBody;
