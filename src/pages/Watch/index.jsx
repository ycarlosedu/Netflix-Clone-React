import React, { useEffect, useState } from 'react';
import HeaderHome from '../../components/Header';
import { WatchDiv, VideoDiv } from './Watch';
import ReactPlayer from 'react-player';
import MovieRow from '../../components/MovieRow';
import { Lists } from '../../components/MovieRow/MovieRow.js';
import { useMyListContext } from '../../contexts/MyList';
import { getHomeList } from '../../services/TMDB.js';
import Loading from '../../components/Loading';
import Footer from '../../components/Footer';

export default function Watch() {
  const [movielist, setMovielist] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { myList, GetLocalStorage } = useMyListContext();

  useEffect(() => {
    const LoadingAll = async () => {
      let list = await getHomeList();
      setMovielist(list);
    };
    LoadingAll();
    GetLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WatchDiv>
      {movielist === null || loaded === false ? (
        <Loading setLoaded={setLoaded} />
      ) : (
        <>
          <HeaderHome />
          <VideoDiv>
            <ReactPlayer
              url='https://www.youtube.com/embed/dQw4w9WgXcQ'
              playing={true}
              width='100%'
              height='80%'
            />
          </VideoDiv>
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
    </WatchDiv>
  );
}
