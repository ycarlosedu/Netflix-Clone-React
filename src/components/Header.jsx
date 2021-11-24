import './Header.css';

import React from 'react';

export default function Header({ Background }) {
  return (
    <header className={Background ? 'black' : ''}>
      <div className='header--logo'>
        <a href='/'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png'
            alt='Netflix Logo'
          />
        </a>
      </div>
      <div className='header--user'>
        <a href='/'>
          <img
            src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png'
            alt='user'
          />
        </a>
      </div>
    </header>
  );
}
