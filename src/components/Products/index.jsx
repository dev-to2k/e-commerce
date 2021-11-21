import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Filter from '../Filter';
import Pagination from '../Pagination';
import ProductItem from './ProductItem';

const Products = ({ data }) => {
  const [isFilter, setIsFilter] = React.useState(false);
  const [filter, setFilter] = React.useState([]);

  // filter by category
  const filteredData = data.filter((item) => {
    if (filter.category === '') {
      return item;
    }
    return item.category === filter.category;
  });

  const onFilter = (filtered) => {
    setIsFilter(true);
    setFilter([...filter, filtered]);
  };

  console.log(filter);

  return (
    <Box paddingY={10}>
      <Container maxW="1204">
        <Heading marginBottom={10} textAlign="center">
          Products
        </Heading>
        <Filter onFilter={onFilter} />
        <Flex wrap="wrap" marginLeft="-30px">
          {data.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Flex>
        <Pagination />
      </Container>
    </Box>
  );
};

export default Products;
