//* In src/components/ArticlePreview.js
import React from 'react';
import './css/ArticlePreview.css'; // For styling

const ArticlePreview = ({ imageSrc, description }) => {
  return (
    <div className="article-preview">
      <img src={imageSrc} alt="Article" />
      <p>{description}</p>
    </div>
  );
};

export default ArticlePreview;
