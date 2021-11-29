import styled from 'styled-components';

export const Background = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 90vh;
  }
`;

export const BlurVertical = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const BlurHorizontal = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 70px 0 150px 30px;
`;

export const FeaturedName = styled.h1`
  font-size: 60px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const FeaturedInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const FeaturedYear = styled.span`
  display: inline-block;
  margin-right: 15px;
`;

export const FeaturedTime = styled(FeaturedYear)``;

export const FeaturedPoints = styled(FeaturedYear)`
  color: #46d369;
`;

export const FeaturedDescription = styled.p`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  max-width: 40%;

  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 100%;
    margin-right: 30px;
  }
`;

export const FeaturedButtons = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
`;

export const FeaturedGenres = styled.p`
  margin-top: 15px;
  font-size: 18px;
  color: #999;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
