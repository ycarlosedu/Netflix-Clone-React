import React from 'react';
import {
  Item,
  OriginalTitle,
  ItemInfos,
  Buttons,
  YearAndPoints,
  Description,
  Points,
} from './MovieItem.js';
import Button from '../Buttons';
import { useMyListContext } from '../../contexts/MyList';
import { useNavigate } from 'react-router-dom';

export default function MovieItem({ item }) {
  const { isOnList, AddToMyList } = useMyListContext();
  const navigate = useNavigate();
  const firstDate = new Date(item.release_date || item.first_air_date);
  if (item.overview.length > 200) {
    item.overview = item.overview.substring(0, 200) + '...';
  }

  function HandleWatch() {
    navigate('/watch/');
  }

  function HandleAddToMyList() {
    AddToMyList(item);
  }

  if (item.overview) {
    return (
      <Item>
        <img
          src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
          alt={item.original_title}
        />
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
            alt={item.original_title}
          />
          <ItemInfos>
            <OriginalTitle>{item.original_title || item.name}</OriginalTitle>
            {item.title !== item.original_title ? <h3>{item.title}</h3> : null}
            <YearAndPoints>
              <span>{firstDate.getFullYear()}</span>
              <Points>{item.vote_average} points</Points>
            </YearAndPoints>
            <Description>{item.overview}</Description>
            <Buttons>
              <Button onClick={HandleWatch}>▶ Assitir</Button>
              <Button color='secondary' onClick={HandleAddToMyList}>
                {isOnList ? '✔ Na lista' : '+ Minha Lista'}
              </Button>
            </Buttons>
          </ItemInfos>
        </div>
      </Item>
    );
  } else {
    return null;
  }
}
