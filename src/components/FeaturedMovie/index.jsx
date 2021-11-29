import React, { useState, useEffect } from 'react';
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
  const [isOnList, setIsOnList] = useState(false);
  const [myList, setMyList] = useState({ results: [] });

  const GetLocalStorage = async () => {
    await setMyList(
      JSON.parse(localStorage.getItem('MyList')) || { results: [] }
    );
  };

  useEffect(() => {
    GetLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    myList.results.forEach((movie) => {
      if (movie.id === item.id) {
        setIsOnList(true);
      }
    });
  }, [myList, item.id]);

  const firstDate = new Date(item.release_date);
  let genres = [];
  item.genres.forEach((element) => {
    genres.push(element.name);
  });

  if (item.overview.length > 200) {
    item.overview = item.overview.substring(0, 200) + '...';
  }

  const AddToMyList = () => {
    if (isOnList) {
      myList.results.forEach((movie) => {
        if (movie.id === item.id) {
          let newList = myList;
          newList.results.splice(myList.results.indexOf(movie), 1);
          setMyList(newList);
          localStorage.setItem('MyList', JSON.stringify(newList));
        }
      });
      setIsOnList(false);
    } else {
      let List = myList || { results: [] };
      let movie = {
        id: item.id,
        backdrop_path: item.backdrop_path,
        genres: item.genres,
        original_title: item.original_title,
        overview: item.overview,
        poster_path: item.poster_path,
        release_date: item.release_date,
        runtime: item.runtime,
        title: item.title,
        vote_average: item.vote_average,
      };
      List.results.push(movie);
      localStorage.setItem('MyList', JSON.stringify(List));
      setIsOnList(true);
    }
  };

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
              <Button color='secondary' onClick={AddToMyList}>
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
