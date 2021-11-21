import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Filter from '../Filter';
import Pagination from '../Pagination';
import ProductItem from './ProductItem';

const Products = ({ data }) => {
  const [products, setProducts] = React.useState(data);
  const [isFilter, setIsFilter] = React.useState(false);
  const [filter, setFilter] = React.useState([]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const onFilter = (category) => {
    const newFilter = products.filter(
      (product) => product.category === category.toLowerCase()
    );
    setIsFilter(true);
    setFilter(newFilter);

    if (category === 'All') {
      setFilter(data);
      setIsFilter(false);
    }
  };

  return (
    <Box paddingY={10} backgroundColor={'gray.100'}>
      <Container maxW="1204">
        <Heading marginBottom={10} textAlign="center">
          Products
        </Heading>
        <Filter onFilter={onFilter} />
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
