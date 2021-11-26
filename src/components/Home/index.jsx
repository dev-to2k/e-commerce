import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Spinner,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import ProductItem from '../Products/ProductItem';
import Hero from './Hero';

const Home = ({ data, isLoading }) => {
  return (
    <Box className="home">
      <Hero />
      <Box
        className="home__new-products"
        textAlign="center"
        paddingY={5}
        backgroundColor={'gray.100'}
      >
        <Heading marginBottom={10} marginTop={5}>
          New Products
        </Heading>
        <Container maxW="1204">
          {isLoading ? (
            <>
              <Spinner color="green" size="xl" />
              <Text>Loading...</Text>
            </>
          ) : (
            <Flex wrap="wrap" alignItems="stretch" marginLeft="-30px">
              {data.slice(0, 8).map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </Flex>
          )}
          <Link to="/products">
            <Button colorScheme="green" marginX="auto" marginTop={5}>
              See more
            </Button>
          </Link>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
