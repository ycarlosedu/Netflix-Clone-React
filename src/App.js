import React from 'react';
import Home from './pages/Home';
import GlobalStyle from './GlobalStyle';
import MyListProvider from './contexts/MyList';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <MyListProvider>
        <Home />
      </MyListProvider>
    </>
  );
}
