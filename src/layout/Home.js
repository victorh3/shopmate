import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = ({ children }) => {
  return (
    <div className="Home">
      <Header />
      <div className="Table">{children}</div>
      <Footer />
    </div>
  );
};

export default Home;
