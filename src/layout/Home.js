import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = ({
  children,
  prevPage,
  nextPage,
  page,
  handleSearch,
  search,
  setSearch,
}) => {
  return (
    <div className="Home">
      <Header
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      <div className="Table">{children}</div>
      <Footer prevPage={prevPage} nextPage={nextPage} page={page} />
    </div>
  );
};

export default Home;
