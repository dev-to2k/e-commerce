import { Box, Container, Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Filter from '../Filter';
import Pagination from '../Shared/Pagination';
import ProductItem from './ProductItem';
import Search from './Search';

const Products = ({ data, isLoading }) => {
  const [state, setState] = useState({
    currentPage: 1,
    productsPerPage: 12,
    active: 1,
    isFilter: false,
    filter: [],
    products: [],
  });

  const { isFilter, filter, currentPage, productsPerPage, active, products } =
    state;

  useEffect(() => {
    setState({
      ...state,
      products: data,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // Logic for displaying products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  let currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onSwitchCategory = (category) => {
    const newFilter = data.filter(
      (product) => product.category === category.toLowerCase()
    );
    setState({
      ...state,
      isFilter: true,
      filter: [...newFilter],
    });

    if (category === 'All') {
      setState({
        ...state,
        isFilter: false,
        filter: [...data],
      });
    }
  };

  const handleClick = (e) => {
    setState({
      ...state,
      currentPage: Number(e.target.id),
      active: Number(e.target.id),
    });
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setState({
        ...state,
        currentPage: currentPage - 1,
        active: currentPage - 1,
      });
    }
  };

  const handleNext = () => {
    if (currentPage < pageNumbers.length) {
      setState({
        ...state,
        currentPage: currentPage + 1,
        active: currentPage + 1,
      });
    }
  };

  const onFilter = (data) => {
    const { price, rate, category } = data;
    switch (category) {
      case 'All':
        if (price === 'low-to-high') {
          const newFilter = products.sort((a, b) => a.price - b.price);
          setState({
            ...state,
            products: [...newFilter],
          });
        }
        if (price === 'high-to-low') {
          const newFilter = products.sort((a, b) => b.price - a.price);
          setState({
            ...state,
            products: [...newFilter],
          });
        }
        if (rate === 'low-to-high') {
          const newFilter = products.sort(
            (a, b) => a.rating.rate - b.rating.rate
          );
          setState({
            ...state,
            products: [...newFilter],
          });
        }
        if (rate === 'high-to-low') {
          const newFilter = products.sort(
            (a, b) => b.rating.rate - a.rating.rate
          );
          setState({
            ...state,
            products: [...newFilter],
          });
        }
        break;
      case "Men's clothing":
      case "Women's clothing":
      case 'Jewelery':
      case 'Electronics':
      default:
        if (price === 'low-to-high') {
          const newFilter = filter.sort((a, b) => a.price - b.price);
          setState({
            ...state,
            filter: [...newFilter],
          });
        }
        if (price === 'high-to-low') {
          const newFilter = filter.sort((a, b) => b.price - a.price);
          setState({
            ...state,
            filter: [...newFilter],
          });
        }
        if (rate === 'low-to-high') {
          const newFilter = filter.sort(
            (a, b) => a.rating.rate - b.rating.rate
          );
          setState({
            ...state,
            filter: [...newFilter],
          });
        }
        if (rate === 'high-to-low') {
          const newFilter = filter.sort(
            (a, b) => b.rating.rate - a.rating.rate
          );
          setState({
            ...state,
            filter: [...newFilter],
          });
        }
        break;
    }
  };

  const onSearch = (search) => {
    const searchName = search.toLowerCase();
    const newFilter = data.filter((product) =>
      product.title.toLowerCase().includes(searchName)
    );
    setState({
      ...state,
      isFilter: true,
      filter: [...newFilter],
    });
  };

  const renderProducts = () => {
    if (isFilter) {
      return filter.map((product) => (
        <ProductItem key={product.id} product={product} />
      ));
    }
    return currentProducts.map((product) => (
      <ProductItem key={product.id} product={product} />
    ));
  };

  return (
    <Box paddingY={10} backgroundColor={'gray.100'}>
      <Container maxW="1204">
        <Heading textAlign="center" mb={10}>
          Products
        </Heading>
        <Filter
          marginY={10}
          onSwitchCategory={onSwitchCategory}
          onFilter={onFilter}
        />
        <Search onSearch={onSearch} />
        <Flex wrap="wrap" marginLeft={-30}>
          {isLoading ? (
            <Box mx="auto" pl={30} mb={5}>
              <Spinner color="green" size="xl" />
              <Text>Loading...</Text>
            </Box>
          ) : (
            renderProducts()
          )}
        </Flex>
        <Pagination
          handleClick={handleClick}
          pageNumbers={pageNumbers}
          handlePrev={handlePrev}
          handleNext={handleNext}
          active={active}
        />
      </Container>
    </Box>
  );
};

export default Products;
