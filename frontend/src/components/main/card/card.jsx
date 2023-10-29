import React from 'react';

function Card({ cover, alt, title, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={cover} alt={alt} />
      <h3>{title}</h3>
    </div>
  );
}

export default Card;