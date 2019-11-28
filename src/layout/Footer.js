import React, { useContext } from 'react';
import { Store } from '../Store';

const Footer = () => {
  const { state, dispatch } = useContext(Store);
  const { page } = state;

  const nextPage = () => {
    return dispatch({
      type: 'SET_PAGE',
      payload: state.page + 1,
    });
  };

  const prevPage = () => {
    return dispatch({
      type: 'SET_PAGE',
      payload: state.page - 1,
    });
  };

  return (
    <footer className="Footer">
      <div>
        <button
          className="Footer__Button"
          disabled={page === 1}
          onClick={prevPage}
        >
          previous
        </button>
        <span className="Footer__CurrentPage">{page}</span>
        <button className="Footer__Button" onClick={nextPage}>
          next
        </button>
      </div>
    </footer>
  );
};

export default Footer;
