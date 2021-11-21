import styled from 'styled-components';

export const CartCount = styled.span`
  background-color: ${(props) => (props.primary ? '#E53E3E' : 'white')};
  color: ${(props) => props.primary && 'white'};
  font-size: 0.8rem;
  font-weight: bold;
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`;
