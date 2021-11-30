import styled from 'styled-components';

export const Item = styled.div`
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
    justify-content: space-between;
    align-items: center;
    padding: 10px 25px 10px 10px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.95);
    width: 600px;
    height: 400px;
    z-index: 9999;
    border-radius: 20px;

    transition: all 0.3s ease;
    animation: fade;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;

    @media (max-width: 768px) {
      width: 400px;
      height: 400px;
    }

    & > img {
      width: 40%;
      border-radius: 20px;
    }
  }

  &:hover > div {
    display: flex;
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

export const ItemInfos = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 10px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const OriginalTitle = styled.h2`
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Buttons = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: row;
  }

  & > button {
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const YearAndPoints = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Points = styled.p`
  color: #46d369;
`;

export const Description = styled.p`
  text-align: center;
`;
