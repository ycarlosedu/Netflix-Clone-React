import styled from 'styled-components';

export const ArrowRight = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.3s;
  right: 0;
  @media (max-width: 768px) {
    opacity: 1;
  }
`;

export const ArrowLeft = styled(ArrowRight)`
  left: 0;
  right: auto;
`;

export const MovieRowDiv = styled.div`
  margin-bottom: 30px;

  & > h2 {
    margin: 0px 0px 0px 30px;
  }

  &:hover > ${ArrowRight}, &:hover > ${ArrowLeft} {
    opacity: 1;
  }
`;

export const ListArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`;

export const List = styled.div`
  transition: all 0.3s ease;
`;

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
