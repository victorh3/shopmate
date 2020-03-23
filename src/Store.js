import React, { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  items: [],
  loaded: false,
  showModal: false,
  modalData: {},
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_ITEMS':
      return { ...state, items: action.payload, loaded: true };
    case 'SET_LOADED':
      return { ...state, loaded: action.payload };
    case 'SET_MODAL':
      return {
        ...state,
        showModal: action.payload.showModal,
        modalData: action.payload.modalData,
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
