import { Button, Image } from '@chakra-ui/react';
import React from 'react';
import * as Styled from './index.styled';

const ProductItem = ({ product }) => {
  return (
    <Styled.ProductItem key={product.id} className="home__new-products__item">
      <Image
        boxSize="200px"
        objectFit="cover"
        src={product.image}
        alt={product.title}
      />
      <p>{product.title}</p>
      <p>
        <strong>${product.price}</strong>
      </p>
      <Button colorScheme="green">Buy</Button>
    </Styled.ProductItem>
  );
};

export default ProductItem;