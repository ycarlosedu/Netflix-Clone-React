import React, { useState } from 'react';
import {
  MovieRowDiv,
  ListArea,
  List,
  ArrowRight,
  ArrowLeft,
} from './MovieRow.js';
import MovieItem from '../MovieItem';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function MovieRow({ title, items }) {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    //ex: screenWidth = 1800px
    let x = scrollX - Math.round(window.innerWidth / 2); //x = scroll -900 = ?
    let listWidth = items.results.length * 150; //listW = 30 * 150px = 4500px,
    if (window.innerWidth - listWidth > x) {
      //if 1800 - 4500 = -2700 > ?
      x = window.innerWidth - listWidth - 60; //x = 1800 - 4500 - 60 (paddings)
    }
    setScrollX(x);
  };
  return (
    <MovieRowDiv>
      <h2>{title}</h2>

      <ArrowLeft onClick={handleLeftArrow}>
        <NavigateBeforeIcon fontSize='large' />
      </ArrowLeft>

      <ArrowRight onClick={handleRightArrow}>
        <NavigateNextIcon fontSize='large' />
      </ArrowRight>

      <ListArea>
        <List
          style={{ marginLeft: scrollX, width: items.results.length * 150 }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <MovieItem key={key} item={item} />
            ))}
        </List>
      </ListArea>
    </MovieRowDiv>
  );
}
