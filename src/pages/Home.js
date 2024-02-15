//* In src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import ArticlePreview from '../components/ArticlePreview';
import './css/Home.css';

const Home = () => {
  return (
    <div className="home">
        <Navbar/>
      <main className="article-grid">
        {/* Dynamically generate ArticlePreviews here */}
      </main>
    </div>
  );
};

export default Home;
