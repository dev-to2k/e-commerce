import { Box, Button, Flex, Select, Spacer } from '@chakra-ui/react';
import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [state, setState] = useState({
    price: '',
    rate: '',
    category: 'All',
  });

  const categories = [
    {
      id: 1,
      label: 'All',
    },
    {
      id: 2,
      label: "Men's clothing",
    },
    {
      id: 3,
      label: "Women's clothing",
    },
    {
      id: 4,
      label: 'Jewelery',
    },
    {
      id: 5,
      label: 'Electronics',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(state);
  };

  const switchCategory = (data) => {
    setState({
      ...state,
      category: data.label,
    });

    onFilter(data.label);
  };

  return (
    <>
      <Flex alignItems="center">
        <Box>
          {categories.map((category) => (
            <Button
              key={category.id}
              colorScheme="green"
              variant={state.category === category.label ? 'solid' : 'outline'}
              backgroundColor={
                state.category === category.label ? 'green.500' : 'white'
              }
              mr={2}
              onClick={() => switchCategory(category)}
            >
              {category.label}
            </Button>
          ))}
        </Box>
        <Spacer />
        <Box>
          <form onSubmit={handleSubmit}>
            <Flex marginY={5} style={{ gap: '1rem' }}>
              <Box>
                <Select
                  variant="outline"
                  backgroundColor={'white'}
                  placeholder="Price"
                  name="price"
                  onChange={(e) => handleChange(e)}
                >
                  <option value="low-to-high">Low to high</option>
                  <option value="high-to-low">High to low</option>
                </Select>
              </Box>
              <Box>
                <Select
                  variant="outline"
                  backgroundColor={'white'}
                  placeholder="Rate"
                  name="rate"
                  onChange={(e) => handleChange(e)}
                >
                  <option value="low-to-high">Low to high</option>
                  <option value="high-to-low">High to low</option>
                </Select>
              </Box>
              <Box>
                <Button colorScheme="green" type="submit">
                  Filter
                </Button>
              </Box>
            </Flex>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default Filter;
