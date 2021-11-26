import React from 'react';
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

export default function FeaturedMovie({ item }) {
  const firstDate = new Date(item.release_date);
  let genres = [];
  item.genres.forEach((element) => {
    genres.push(element.name);
  });

  if (item.overview.length > 200) {
    item.overview = item.overview.substring(0, 200) + '...';
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
              <Button>▶ Assitir</Button>
              <Button color='secondary'>+ Minha Lista</Button>
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
