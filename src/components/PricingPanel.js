import React from 'react';
import './css/PricingPanel.css'; // Ensure this path is correct

const PricingPanel = ({ title, text, onSelect, isPremiumPlus }) => {
  const buttonClass = `select-button ${isPremiumPlus ? 'premium-plus' : ''}`;

  // Split the text prop into lines and render each as a separate paragraph
  const renderTextParagraphs = text => {
    return text.split('\n').map((line, index) => (
      // Render each line as a separate paragraph, using index as a key
      <p key={index} className="pricing-panel-text">
        {line}
      </p>
    ));
  };

  return (
    <div className="pricing-panel">
      <h2>{title}</h2>
      {/* Render text split into paragraphs */}
      <div className="text-content">{renderTextParagraphs(text)}</div>
      <button className={buttonClass} onClick={onSelect}>
        Select {title}
      </button>
    </div>
  );
};

export default PricingPanel;
