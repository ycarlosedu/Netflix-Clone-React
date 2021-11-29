import React, { createContext, useContext, useState } from 'react';

const MyListContext = createContext();
MyListContext.displayName = 'MyList';

export default function MyListProvider({ children }) {
  const [myList, setMyList] = useState({ results: [] });
  const [isOnList, setIsOnList] = useState(false);

  return (
    <MyListContext.Provider
      value={{
        myList,
        setMyList,
        isOnList,
        setIsOnList,
      }}
    >
      {children}
    </MyListContext.Provider>
  );
}

export function useMyListContext() {
  const { myList, setMyList, isOnList, setIsOnList } =
    useContext(MyListContext);

  const GetLocalStorage = async () => {
    await setMyList(
      JSON.parse(localStorage.getItem('MyList')) || { results: [] }
    );
  };

  const VerifyIfIsOnList = (id) => {
    myList.results.forEach((movie) => {
      if (movie.id === id) {
        setIsOnList(true);
      }
    });
  };

  const AddToMyList = (item) => {
    if (isOnList) {
      myList.results.forEach((movie) => {
        if (movie.id === item.id) {
          let newList = myList;
          newList.results.splice(myList.results.indexOf(movie), 1);
          setMyList(newList);
          localStorage.setItem('MyList', JSON.stringify(newList));
        }
      });
      setIsOnList(false);
    } else {
      let List = myList || { results: [] };
      let movie = {
        id: item.id,
        backdrop_path: item.backdrop_path,
        genres: item.genres,
        original_title: item.original_title,
        overview: item.overview,
        poster_path: item.poster_path,
        release_date: item.release_date,
        runtime: item.runtime,
        title: item.title,
        vote_average: item.vote_average,
      };
      List.results.push(movie);
      localStorage.setItem('MyList', JSON.stringify(List));
      setIsOnList(true);
    }
  };

  return {
    myList,
    isOnList,
    GetLocalStorage,
    VerifyIfIsOnList,
    AddToMyList,
  };
}
