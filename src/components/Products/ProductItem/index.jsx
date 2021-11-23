import { Button, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import * as Styled from './index.styled';

const ProductItem = ({ product }) => {
  const [list, setList] = useState([]);

  const handleClick = (data) => {
    setList((list) => [...list, data]);
  };

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
      <p>{product.rating.rate}</p>
      <Button colorScheme="green" onClick={(e) => handleClick(product)}>
        Buy
      </Button>
    </Styled.ProductItem>
  );
};

export default ProductItem;
