import React, { useEffect } from 'react';
import { useState } from 'react';
import { getHomeList, getSingleMovie } from '../TMDB.js';
import MovieRow from '../components/MovieRow';
import FeaturedMovie from '../components/FeaturedMovie';
import Header from '../components/Header';
import './Home.css';
import Footer from '../components/Footer.jsx';
import Loading from '../components/Loading.jsx';

export default function Home() {
  const [movielist, setMovielist] = useState(null);
  const [featuredData, setFeaturedData] = useState(null);
  const [headerBackground, setHeaderBackground] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const LoadingAll = async () => {
    let list = await getHomeList();
    setMovielist(list);

    let originals = list.filter((items) => items.slug === 'originals');
    let randomChosen = Math.floor(
      Math.random() * (originals[0].items.results.length - 1)
    );
    let chosen = originals[0].items.results[randomChosen];
    let chosenInfo = await getSingleMovie(chosen.id, 'tv');
    setFeaturedData(chosenInfo);
  };

  const scrollListener = () => {
    if (window.scrollY > 10) {
      setHeaderBackground(true);
    } else {
      setHeaderBackground(false);
    }
  };

  useEffect(() => {
    LoadingAll();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div>
      {movielist === null || featuredData === null || loaded === false ? (
        <Loading setLoaded={setLoaded} />
      ) : (
        <>
          <Header Background={headerBackground} />
          <FeaturedMovie item={featuredData} />
          <section className='lists'>
            {movielist.map((item, key) => (
              <MovieRow key={key} title={item.title} items={item.items} />
            ))}
          </section>
          <Footer />
        </>
      )}
    </div>
  );
}
