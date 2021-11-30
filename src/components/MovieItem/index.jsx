import React from 'react';
import { Item } from './Movieitem.js';

export default function MovieItem({ item }) {
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
        <div>
          <h2>{item.original_title || item.name}</h2>
          <h3>{item.title !== item.original_title ? item.title : null}</h3>
          <p>{item.overview}</p>
          <p>{item.release_date || item.first_air_date}</p>
          <p>{item.vote_average} points</p>
        </div>
      </div>
    </Item>
  );
}
