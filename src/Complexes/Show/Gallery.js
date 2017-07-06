import React from 'react';

export default () => {
  return (
    <div className="gallery">
      <div className="complex-gallery">
        <img src={process.env.PUBLIC_URL + './bitmap1.png'} />
        <img src={process.env.PUBLIC_URL + './bitmap2.png'} />
        <img src={process.env.PUBLIC_URL + './bitmap3.png'} />
        <img src={process.env.PUBLIC_URL + './bitmap4.png'} />
        <img src={process.env.PUBLIC_URL + './bitmap5.png'} />
      </div>
      <div className="container">
        <div className="gallery-button-margin">
          <button className="gallery-button">41 фотография</button>
        </div>
      </div>
    </div>
  );
};