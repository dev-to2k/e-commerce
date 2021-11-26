import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react';
import '../../../styles/pagination.scss';

const Pagination = ({
  handleClick,
  pageNumbers,
  handlePrev,
  handleNext,
  active,
}) => {
  return (
    <ul className="page">
      <Button onClick={() => handlePrev()}>
        <ArrowLeftIcon />
      </Button>
      {pageNumbers.map((number) => (
        <Button
          className={`page__numbers ${active === number ? 'active' : ''}`}
          key={number}
          id={number}
          onClick={(e) => handleClick(e)}
        >
          {number}
        </Button>
      ))}
      <Button onClick={() => handleNext()}>
        <ArrowRightIcon />
      </Button>
    </ul>
  );
};

export default Pagination;
