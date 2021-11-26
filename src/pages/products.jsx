import React from 'react';
import Products from '../components/Products';

const ProductsPage = ({ data, isLoading }) => (
  <>
    <Products data={data} isLoading={isLoading} />
  </>
);

export default ProductsPage;
