import React from 'react';

export default () => {
  return (
    <div className="container">
      <div className="row between-xs">
        <div className="complex-location">
          <h1 className="complex-name">Жилой комплекс «Полянка/44»</h1>
          <p className="complex-adress">Район Якиманка, улица Большая Полянка, дом 44 • 119180</p>
        </div>
        <button className="complex-button">В избранное</button>
      </div>
    </div>
  );
};