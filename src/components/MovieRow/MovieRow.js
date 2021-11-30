import styled from 'styled-components';

export const Lists = styled.section`
  margin-top: -150px;
`;

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
