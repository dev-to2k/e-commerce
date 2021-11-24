import {
  AddIcon,
  ArrowBackIcon,
  CloseIcon,
  DeleteIcon,
  MinusIcon,
} from '@chakra-ui/icons';
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
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart, removeFromCart } from '../../redux/actions/cartAction';

const ListCart = () => {
  let {
    cart: { list },
  } = useSelector((state) => state);
  const [listCart, setListCart] = useState([...list]);

  const dispatch = useDispatch();

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
      <Table variant="simple">
        <Thead>
          {listCart.length > 0 && (
            <Tr>
              <Th colSpan={5} px={0}>
                <Flex alignItems="center" justifyContent="space-between">
                  <Link to="/products">
                    <Button leftIcon={<ArrowBackIcon />}>
                      <Text>Continue shopping</Text>
                    </Button>
                  </Link>
                  <Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => dispatch(clearCart())}
                  >
                    <DeleteIcon mr={2} />
                    Delete
                  </Button>
                </Flex>
              </Th>
            </Tr>
          )}
          <Tr>
            <Th>Image</Th>
            <Th>Price</Th>
            <Th textAlign="center">Quantity</Th>
            <Th isNumeric>Subtotal</Th>
            <Th>Remove</Th>
          </Tr>
        </Thead>
        <Tbody>
          {listCart.length > 0 ? (
            listCart.map((item) => (
              <Tr key={item.id}>
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
                      onClick={() => decreaseQuantity(item)}
                    >
                      <MinusIcon />
                    </Button>
                    <Text style={styleQuantity}>{item.quantity}</Text>
                    <Button
                      colorScheme="green"
                      onClick={() => increaseQuantity(item)}
                    >
                      <AddIcon />
                    </Button>
                  </Flex>
                </Td>
                <Td textAlign="center">
                  {(item.quantity * item.price).toFixed(2)}
                </Td>
                <Td textAlign="center">
                  <Button onClick={() => dispatch(removeFromCart(item.id))}>
                    <CloseIcon />
                  </Button>
                </Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <Td colSpan={5} textAlign="center">
                <Text>No item in cart</Text>
              </Td>
            </Tr>
          )}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th isNumeric colSpan={5}>
              {listCart.length === 0 ? (
                <Text>Total: 0</Text>
              ) : (
                <Text>
                  Total: {/* total equal sum of subtotal of each item */}
                  {listCart.reduce((total, item) => {
                    return total + item.quantity * item.price;
                  }, 0)}
                </Text>
              )}
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
};

export default ListCart;
