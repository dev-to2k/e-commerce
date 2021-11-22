import {
  Image,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';

const ListCart = () => {
  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Name</Th>
            <Th isNumeric>Quantity</Th>
            <Th isNumeric>TotalPrice</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Image
                boxSize="100px"
                objectFit="cover"
                src="https://bit.ly/sage-adebayo"
                alt="Segun Adebayo"
              />
            </Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th></Th>
            <Th></Th>
            <Th isNumeric>
              <strong>SubTotal:</strong> $12
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
};

export default ListCart;
