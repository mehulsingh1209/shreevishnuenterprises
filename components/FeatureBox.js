import React from 'react';

const FeatureBox = ({ icon, title, description }) => {
  return (
    <div className="feature">
      <div className="feature-icon">
        <i className={icon}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureBox;
