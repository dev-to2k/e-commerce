import React from 'react';
import Home from '../components/Home';

const HomePage = ({ data, isLoading }) => (
  <>
    <Home data={data} isLoading={isLoading} />
  </>
);

export default HomePage;
