import styled from 'styled-components';

export const Item = styled.button`
  background: transparent;
  border: none;
  display: inline-block;
  width: 150px;

  & img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.3s;
  }

  & > div {
    display: none;
    transition: all 0.3s ease;
    animation: fade;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;

    & > img {
      width: 40%;
      border-radius: 20px;
    }
  }

  &:hover > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 25px 10px 10px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.95);
    width: 450px;
    height: 300px;
    z-index: 9999;
    border-radius: 20px;
    color: white;
  }

  @keyframes fade {
    from {
      opacity: 0;
      transform: translateY(0px);
    }
    to {
      opacity: 1;
      transform: translateY(-250px);
    }
  }
`;
