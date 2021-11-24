import React from 'react';
import './FeaturedMovie.css';

export default function FeaturedMovie({ item }) {
  console.log(item);
  const firstDate = new Date(item.first_air_date);
  let genres = [];
  item.genres.forEach((element) => {
    genres.push(element.name);
  });

  if (item.overview.length > 200) {
    item.overview = item.overview.substring(0, 200) + '...';
  }

  return (
    <section
      className='featured'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className='featured--vertical'>
        <div className='featured--horizontal'>
          <div className='featured-name'>{item.original_name}</div>
          <div className='featured-info'>
            <div className='featured-points'>{item.vote_average} pontos</div>
            <div className='featured-year'>{firstDate.getFullYear()}</div>
            <div className='featured-seasons'>
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? 's' : ''}
            </div>
            <div className='featured-description'>{item.overview}</div>
            <div className='featured-buttons'>
              <button className='button-primary'>▶ Assitir</button>
              <button className='button-secondary'>+ Minha Lista</button>
            </div>
            <div className='featured-genres'>
              <strong>Gêneros: </strong>
              {genres.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
