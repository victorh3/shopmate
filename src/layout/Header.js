import React, { Fragment } from 'react';
import { TableTools } from '../components';

const Header = ({ handleSearch, search, setSearch }) => {
  return (
    <Fragment>
      <header className="Header">
        <h1>shopmate</h1>
      </header>
      <TableTools
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
    </Fragment>
  );
};

export default Header;
