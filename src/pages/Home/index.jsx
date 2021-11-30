import React, { useEffect } from 'react';
import { useState } from 'react';
import { getHomeList, getSingleMovie } from '../../services/TMDB.js';
import MovieRow from '../../components/MovieRow';
import { Lists } from '../../components/MovieRow/MovieRow.js';
import FeaturedMovie from '../../components/FeaturedMovie';
import HeaderHome from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import { useMyListContext } from '../../contexts/MyList';

export default function Home() {
  const [movielist, setMovielist] = useState(null);
  const [featuredData, setFeaturedData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const { myList, GetLocalStorage } = useMyListContext();

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

  useEffect(() => {
    const LoadingAll = async () => {
      let list = await getHomeList();
      let trending = list.filter((items) => items.slug === 'trending');
      setMovielist(list);
      LoadFeatured(trending);
    };
    LoadingAll();
    GetLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {movielist === null || featuredData === null || loaded === false ? (
        <Loading setLoaded={setLoaded} />
      ) : (
        <>
          <HeaderHome />
          <FeaturedMovie item={featuredData} />
          <Lists>
            {myList.results.length === 0 ? null : (
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
