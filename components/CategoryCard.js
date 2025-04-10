import React from 'react';

const CategoryCard = ({ image, title, description }) => {
  return (
    <div className="category-card">
      <div className="category-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="category-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#" className="browse-link">Browse Products <i className="fas fa-angle-right"></i></a>
      </div>
    </div>
  );
};

export default CategoryCard;
