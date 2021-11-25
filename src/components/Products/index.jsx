import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Filter from '../Filter';
import Pagination from '../Shared/Pagination';
import ProductItem from './ProductItem';
import Search from './Search';

const Products = ({ data }) => {
  const [state, setState] = useState({
    products: data,
    currentPage: 1,
    productsPerPage: 3,
  });

  const { products, currentPage, productsPerPage } = state;

  const [isFilter, setIsFilter] = useState(false);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    setState({
      products: data,
    });
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
          setState({
            products: [...newFilter],
          });
        }
        if (price === 'high-to-low') {
          const newFilter = products.sort((a, b) => b.price - a.price);
          setState({
            products: [...newFilter],
          });
        }
        if (rate === 'low-to-high') {
          const newFilter = products.sort(
            (a, b) => a.rating.rate - b.rating.rate
          );
          setState({
            products: [...newFilter],
          });
        }
        if (rate === 'high-to-low') {
          const newFilter = products.sort(
            (a, b) => b.rating.rate - a.rating.rate
          );
          setState({
            products: [...newFilter],
          });
        }
        break;
      case "Men's clothing":
      // eslint-disable-next-line no-fallthrough
      case "Women's clothing":
      case 'Jewelery':
      case 'Electronics':
      default:
        if (price === 'low-to-high') {
          const newFilter = filter.sort((a, b) => a.price - b.price);
          setFilter([...newFilter]);
        }
        if (price === 'high-to-low') {
          const newFilter = filter.sort((a, b) => b.price - a.price);
          setFilter([...newFilter]);
        }
        if (rate === 'low-to-high') {
          const newFilter = filter.sort(
            (a, b) => a.rating.rate - b.rating.rate
          );
          setFilter([...newFilter]);
        }
        if (rate === 'high-to-low') {
          const newFilter = filter.sort(
            (a, b) => b.rating.rate - a.rating.rate
          );
          setFilter([...newFilter]);
        }
        break;
    }
  };

  const onSearch = (search) => {
    const searchName = search.toLowerCase();
    const newFilter = products.filter((product) =>
      product.title.toLowerCase().includes(searchName)
    );
    setState({
      products: [...newFilter],
    });

    if (search === '') {
      setState({
        products: [...data],
      });
    }
  };

  // Logic for displaying products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  console.log(currentProducts);

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

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
