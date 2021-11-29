import React, { useEffect } from 'react';
import { Lists } from './Home.js';
import { useState } from 'react';
import { getHomeList, getSingleMovie } from '../../services/TMDB.js';
import MovieRow from '../../components/MovieRow';
import FeaturedMovie from '../../components/FeaturedMovie';
import HeaderHome from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';

export default function Home() {
  const [movielist, setMovielist] = useState(null);
  const [featuredData, setFeaturedData] = useState(null);
  const [headerBackground, setHeaderBackground] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [myList, setMyList] = useState(null);

  const LoadFeatured = async (trending) => {
    let randomChosen = Math.floor(
      Math.random() * (trending[0].items.results.length - 1)
    );
    let chosen = trending[0].items.results[randomChosen];
    let chosenInfo = await getSingleMovie(chosen.id, 'movie');
    if (chosenInfo.backdrop_path && chosenInfo.genres && chosenInfo.overview) {
      setFeaturedData(chosenInfo);
    } else {
      LoadFeatured(trending);
    }
  };

  const scrollListener = () => {
    if (window.scrollY > 10) {
      setHeaderBackground(true);
    } else {
      setHeaderBackground(false);
    }
  };

  useEffect(() => {
    const LoadingAll = async () => {
      let list = await getHomeList();
      let trending = list.filter((items) => items.slug === 'trending');
      setMovielist(list);
      LoadFeatured(trending);
    };
    LoadingAll();
    setMyList(JSON.parse(localStorage.getItem('MyList')) || null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);
  console.log(myList);
  return (
    <div>
      {movielist === null || featuredData === null || loaded === false ? (
        <Loading setLoaded={setLoaded} />
      ) : (
        <>
          <HeaderHome Background={headerBackground} />
          <FeaturedMovie item={featuredData} />
          <Lists>
            {myList === { results: [] } ? null : (
              <MovieRow title='Minha Lista' items={myList} />
            )}
            {movielist.map((item, key) => (
              <MovieRow key={key} title={item.title} items={item.items} />
            ))}
          </Lists>
          <Footer />
        </>
      )}
    </div>
  );
}
