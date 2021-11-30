import { Header, HeaderLogo, HeaderUser } from './Header.js';

import React, { useState, useEffect } from 'react';

export default function HeaderHome() {
  const [Background, setBackground] = useState(false);

  const scrollListener = () => {
    if (window.scrollY > 10) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <Header Background={Background}>
      <HeaderLogo>
        <a href='/'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png'
            alt='Netflix Logo'
          />
        </a>
      </HeaderLogo>
      <HeaderUser>
        <a href='/'>
          <img
            src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png'
            alt='user'
          />
        </a>
      </HeaderUser>
    </Header>
  );
}
