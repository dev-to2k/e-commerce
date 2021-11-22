import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form onSubmit={onSubmit}>
      <InputGroup mb={6}>
        <Input
          maxWidth={370}
          ml="auto"
          type="text"
          background="white"
          placeholder="Enter your search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <InputRightElement children={<SearchIcon color="green.500" />} />
      </InputGroup>
    </form>
  );
};

export default Search;
