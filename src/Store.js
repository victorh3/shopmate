import React, { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  items: [],
  loaded: true,
  page: 1,
  search: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_ITEMS':
      return { ...state, items: action.payload };
    case 'SET_LOADING':
      return { ...state, loaded: action.payload };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
