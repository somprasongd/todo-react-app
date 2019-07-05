import React from 'react';

const Card = ({ header, title, description }) => {
  return (
    <div className="card">
      <div className="card-header">{header}</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
