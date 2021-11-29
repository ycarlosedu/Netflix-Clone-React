import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: ${({ Background }) =>
    Background ? '#141414' : 'transparent'};
  transition: all 0.5s ease;
`;

export const HeaderLogo = styled.div`
  height: 25px;

  & img {
    height: 100%;
  }
`;

export const HeaderUser = styled.div`
  height: 35px;
  animation-duration: 0.2s;
  animation-iteration-count: 4;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
    animation-name: vibration;
    animation-timing-function: ease-in-out;
  }

  @keyframes vibration {
    0% {
      transform: rotate(10deg);
    }
    33% {
      transform: rotate(20deg);
    }
    66% {
      transform: rotate(-20deg);
    }
    100% {
      transform: rotate(-10deg);
    }
  }

  & img {
    height: 100%;
    border-radius: 3px;
  }
`;
