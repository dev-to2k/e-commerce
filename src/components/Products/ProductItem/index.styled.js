import styled from 'styled-components';

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  width: calc(25% - 30px);
  margin-left: 30px;
  margin-bottom: 30px;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;
