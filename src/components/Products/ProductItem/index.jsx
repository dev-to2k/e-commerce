import { Button, Image } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Styled from './index.styled';
import { addToCart } from '../../../redux/actions/cartAction';

const ProductItem = ({ product, onToastify }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    onToastify();
    dispatch(addToCart(product));
  };

  return (
    <>
      <Styled.ProductItem key={product.id} className='home__new-products__item'>
        <Image
          boxSize='200px'
          objectFit='cover'
          src={product.image}
          alt={product.title}
        />
        <p>{product.title}</p>
        <p>
          <strong>${product.price}</strong>
        </p>
        <p>Rating: {product.rating.rate}</p>
        <Button colorScheme='green' onClick={() => handleAddToCart(product)}>
          Buy
        </Button>
      </Styled.ProductItem>
    </>
  );
};

export default ProductItem;
