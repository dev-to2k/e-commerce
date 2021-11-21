import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import React from 'react';
import './../../styles/pagination.scss';

const Pagination = () => {
  return (
    <ul className="page">
      <li className="page__btn">
        <ArrowLeftIcon />
      </li>
      <li className="page__numbers"> 1</li>
      <li className="page__numbers active">2</li>
      <li className="page__numbers">3</li>
      <li className="page__numbers">4</li>
      <li className="page__numbers">5</li>
      <li className="page__numbers">6</li>
      <li className="page__dots">...</li>
      <li className="page__numbers"> 10</li>
      <li className="page__btn">
        <ArrowRightIcon />
      </li>
    </ul>
  );
};

export default Pagination;
