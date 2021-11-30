import styled from 'styled-components';

export const LoadingDiv = styled.div`
  background-color: #131313;
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 5s ease;
  animation-name: fade;
  animation-duration: 1.8s;

  /* iframe {
    width: 100%;
    height: 100%;
    pointer-events: none;
  } */

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
