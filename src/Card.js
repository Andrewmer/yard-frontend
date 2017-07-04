import React from 'react';
import cardimg from './img/bitmap.png';

export default () => {
  return (
    <div className="cards">
      <section className="container">
          <a className="card" href="#">
            <img src={cardimg} alt="764 Metropolitan Avenue" className="card-img" />
            <div className="card-details">
              <p className="card-district">South Beach, San Francisco</p>
              <h3 className="card-address">764 Metropolitan Avenue</h3>
              <p className="card-text">
                The Lewis Steel Building is a masterful industrial conversion located 
                in the heart of Williamsburg. Located at 76 North 4th Street, 
                the former 1930's steel factory has been transformed into 83 individually
                unique and luxury loft apartments.
              </p>
            </div>
          </a>
        </section>
        <section className="container">
          <a className="card hover" href="#">
            <img src={cardimg} alt="100 East 53rd Street" className="card-img" />
            <div className="card-details">
              <p className="card-district">Midtown East, Manhattan</p>
              <h3 className="card-address">100 East 53rd Street</h3>
              <p className="card-text">
                One Hundred East Fifty Third Street by Foster + Partners is a limited 
                collection of modern residences in Midtown Manhattan's Cultural District. 
                The 94 residences ranging from alcove lofts to four bedrooms within 
                the 63-story tower are generously proportioned.
              </p>
            </div>
          </a>
        </section>
        <section className="container">
          <a className="card" href="#">
            <img src={cardimg} alt="100 East 53rd Street" className="card-img" />
            <div className="card-details">
              <p className="card-district">Nolita, Manhattan</p>
              <h3 className="card-address">152 Elizabeth</h3>
              <p className="card-text">
                152 Elizabeth is an ultra-luxury condominium building—the first in 
                New York City designed by Japanese master architect Tadao Ando. 
                Located at the corner of Kenmare and Elizabeth Streets in Nolita, 
                the 32,000-square-foot building will stand as a profound architectural 
                statement and embrace the industrial character of the neighborhood.
              </p>
            </div>
          </a>
        </section>
  </div>
  );
};