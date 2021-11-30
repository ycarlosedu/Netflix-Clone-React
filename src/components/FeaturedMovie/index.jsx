import React, { useEffect } from 'react';
import {
  Background,
  BlurVertical,
  BlurHorizontal,
  FeaturedName,
  FeaturedInfo,
  FeaturedYear,
  FeaturedTime,
  FeaturedPoints,
  FeaturedDescription,
  FeaturedButtons,
  FeaturedGenres,
} from './FeaturedMovie.js';
import Button from '../Buttons';
import { useMyListContext } from '../../contexts/MyList';
import { useNavigate } from 'react-router-dom';

export default function FeaturedMovie({ item }) {
  const { myList, isOnList, GetLocalStorage, VerifyIfIsOnList, AddToMyList } =
    useMyListContext();
  const navigate = useNavigate();

  useEffect(() => {
    GetLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    VerifyIfIsOnList(item.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myList, item.id]);

  const firstDate = new Date(item.release_date);
  let genres = [];
  item.genres.forEach((element) => {
    genres.push(element.name);
  });

  if (item.overview.length > 200) {
    item.overview = item.overview.substring(0, 200) + '...';
  }

  function HandleWatch() {
    navigate('/watch/');
  }

  function HandleAddToMyList() {
    AddToMyList(item);
  }

  return (
    <Background
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <BlurVertical>
        <BlurHorizontal>
          <FeaturedName>{item.original_title}</FeaturedName>
          {item.title && item.title !== item.original_title ? (
            <h2>{item.title}</h2>
          ) : null}
          <FeaturedInfo>
            <FeaturedPoints>{item.vote_average} pontos</FeaturedPoints>
            <FeaturedYear>{firstDate.getFullYear()}</FeaturedYear>
            <FeaturedTime>{item.runtime} minutos</FeaturedTime>
            <FeaturedDescription>{item.overview}</FeaturedDescription>
            <FeaturedButtons>
              <Button onClick={HandleWatch}>▶ Assitir</Button>
              <Button color='secondary' onClick={HandleAddToMyList}>
                {isOnList ? '✔ Na lista' : '+ Minha Lista'}
              </Button>
            </FeaturedButtons>
            <FeaturedGenres>
              <strong>Gêneros: </strong>
              {genres.join(', ')}
            </FeaturedGenres>
          </FeaturedInfo>
        </BlurHorizontal>
      </BlurVertical>
    </Background>
  );
}
