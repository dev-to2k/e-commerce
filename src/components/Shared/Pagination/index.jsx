import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import React from 'react';
import '../../../styles/pagination.scss';

const Pagination = ({ handleClick, pageNumbers }) => {
  return (
    <ul className="page">
      <li className="page__btn">
        <ArrowLeftIcon />
      </li>
      {pageNumbers.map((number) => (
        <li className="page__numbers" key={number} onClick={handleClick}>
          {number}
        </li>
      ))}
      <li className="page__btn">
        <ArrowRightIcon />
      </li>
    </ul>
  );
};

export default Pagination;
