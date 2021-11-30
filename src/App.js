import React from 'react';
import Home from './pages/Home';
import Watch from './pages/Watch';
import GlobalStyle from './GlobalStyle';
import MyListProvider from './contexts/MyList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <MyListProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/watch/' element={<Watch />} />
          </Routes>
        </Router>
      </MyListProvider>
    </>
  );
}
