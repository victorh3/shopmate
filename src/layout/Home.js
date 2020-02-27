import React from 'react';
import Header from './Header';

const Home = ({ children }) => {
  return (
    <div className="Home">
      <Header />
      <div className="Table">{children}</div>
    </div>
  );
};

export default Home;
