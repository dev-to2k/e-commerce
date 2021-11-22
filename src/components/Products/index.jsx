import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Filter from '../Filter';
import Pagination from '../Pagination';
import ProductItem from './ProductItem';

const Products = ({ data }) => {
  const [products, setProducts] = useState(data);
  const [isFilter, setIsFilter] = useState(false);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const onSwitchCategory = (category) => {
    const newFilter = products.filter(
      (product) => product.category === category.toLowerCase()
    );
    setIsFilter(true);
    setFilter(newFilter);

    if (category === 'All') {
      setIsFilter(false);
    }
  };

  const onFilter = (data) => {
    const { price, rate, category } = data;
    switch (category) {
      case 'All':
        if (price === 'low-to-high') {
          const newFilter = products.sort((a, b) => a.price - b.price);
          setProducts([...newFilter]);
        }
        if (price === 'high-to-low') {
          const newFilter = products.sort((a, b) => b.price - a.price);
          setProducts([...newFilter]);
        }
        if (rate === 'low-to-high') {
          const newFilter = products.sort(
            (a, b) => a.rating.rate - b.rating.rate
          );
          setProducts([...newFilter]);
        }
        if (rate === 'high-to-low') {
          const newFilter = products.sort(
            (a, b) => b.rating.rate - a.rating.rate
          );
          setProducts([...newFilter]);
        }
        break;
      case "Men's clothing":
        break;
      case "Women's clothing":
        break;
      case 'Jewelery':
        break;
      case 'Electronics':
        break;
      default:
        break;
    }
  };

  return (
    <Box paddingY={10} backgroundColor={'gray.100'}>
      <Container maxW="1204">
        <Heading marginBottom={10} textAlign="center">
          Products
        </Heading>
        <Filter onSwitchCategory={onSwitchCategory} onFilter={onFilter} />
        <Flex wrap="wrap" marginLeft="-30px">
          {isFilter
            ? filter.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))
            : products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
        </Flex>
        <Pagination />
      </Container>
    </Box>
  );
};

export default Products;
