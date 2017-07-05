import React from 'react';
import gallery1 from './img/bitmap1.png'
import gallery2 from './img/bitmap2.png'
import gallery3 from './img/bitmap3.png'
import gallery4 from './img/bitmap4.png'
import gallery5 from './img/bitmap5.png'

export default () => {
  return (
    <div className="gallery">
      <div className="complex-gallery">
        <img src={gallery1} className="complex-gallery-item" />
        <img src={gallery2} className="complex-gallery-item" />
        <img src={gallery3} className="complex-gallery-item" />
        <img src={gallery4} className="complex-gallery-item" />
        <img src={gallery5} className="complex-gallery-item" />
      </div>
      <div className="container">
        <div className="gallery-button-margin">
          <button className="gallery-button">41 фотография</button>
        </div>
      </div>
    </div>
  );
};