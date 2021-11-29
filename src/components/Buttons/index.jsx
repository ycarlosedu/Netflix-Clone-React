import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  transition: all ease 0.2s;

  background-color: ${({ color }) => (color === 'secondary' ? '#333' : '#fff')};
  color: ${({ color }) => (color === 'secondary' ? '#fff' : '#000')};

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export default function Button({ children, color, onClick }) {
  return (
    <Btn color={color} onClick={onClick}>
      {children}
    </Btn>
  );
}
