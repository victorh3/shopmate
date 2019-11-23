import React from 'react';

const Footer = ({ prevPage, nextPage, page }) => {
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
        {page}
        <button className="Footer__Button" onClick={nextPage}>
          next
        </button>
      </div>
    </footer>
  );
};

export default Footer;
