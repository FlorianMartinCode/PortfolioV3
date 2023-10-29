import React from 'react';

function Card({ cover, alt, title }) {
  return (
    <div className="card">
      <img src={cover} alt={alt} />
      <h3>{title}</h3>
    </div>
  );
}

export default Card;