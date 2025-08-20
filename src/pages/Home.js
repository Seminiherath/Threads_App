// src/pages/Home.jsx
import React from 'react';
import Feed from '../components/Feed';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Feed />
    </div>
  );
};

export default Home;