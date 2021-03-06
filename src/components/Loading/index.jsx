import React, { useEffect } from 'react';
import { LoadingDiv } from './Loading.js';

export default function Loading({ setLoaded }) {
  useEffect(() => {
    let loading = document.querySelector('#loading');
    loading.addEventListener('animationend', () => {
      setLoaded(true);
    });
    return () => {
      loading.removeEventListener('animationend', () => {
        setLoaded(true);
      });
    };
  }, [setLoaded]);

  return (
    <LoadingDiv id='loading'>
      {/* <iframe
        src='https://www.youtube.com/embed/6Jg_rkKtJgo?autoplay=1'
        frameborder='0'
        title='Netflix intro'
        allow='autoplay'
      ></iframe> */}
      <img
        src='https://c.tenor.com/Rfyx9OkRI38AAAAC/netflix-netflix-startup.gif'
        alt='carregando...'
      />
    </LoadingDiv>
  );
}
