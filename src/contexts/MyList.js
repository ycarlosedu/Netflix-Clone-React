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
}
