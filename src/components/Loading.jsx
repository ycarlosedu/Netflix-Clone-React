import React, { useEffect } from 'react';
import './Loading.css';

export default function Loading({ setLoaded }) {
  useEffect(() => {
    let loading = document.querySelector('.loading');
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
    <div className='loading'>
      <img
        src='https://c.tenor.com/Rfyx9OkRI38AAAAC/netflix-netflix-startup.gif'
        alt='carregando...'
      />
    </div>
  );
}
