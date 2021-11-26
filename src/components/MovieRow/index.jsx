import React, { useState } from 'react';
import './MovieRow.css';
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
    <div className='movieRow'>
      <h2>{title}</h2>

      <div className='movieRow--left' onClick={handleLeftArrow}>
        <NavigateBeforeIcon fontSize='large' />
      </div>

      <div className='movieRow--right' onClick={handleRightArrow}>
        <NavigateNextIcon fontSize='large' />
      </div>

      <div className='movieRow--listarea'>
        <div
          className='movieRow--list'
          style={{ marginLeft: scrollX, width: items.results.length * 150 }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className='movieRow--item'>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
