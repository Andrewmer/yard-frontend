import React from 'react';
import jakimankaImg from './img/polyanka-photo.png';
import jakimankaMap from './img/map.png';

export default () => {
  return (
    <section className="jakimanka">
      <div className="container">
        <div className="row">
          <div className="col-xs-6">
            <h5 className="jakimanka-heading">Якиманка</h5>
            <h2 className="jakimanka-description">Исторический центр Москвы в двух<br /> километрах от Кремля</h2>
            <a href="#" className="jakimanka-link">Гид по Якиманке →</a>
          </div>
          <div className="col-xs-6">
            <img src={jakimankaImg} alt="Полянка" className="jakimanka-img" />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <img className="jakimanka-map" src={jakimankaMap} />
          </div>
          <div className="col-xs-6">
            <div className="jakimanka-card">
              <div className="jakimanka-card-item">
                <h6 className="jakimanka-card-location">Красный Октябрь</h6>
                <p className="jakimanka-card-distance">24 минуты, 6 км</p>
              </div>
              <div className="jakimanka-card-item">
                <h6 className="jakimanka-card-location">World class</h6>
                <p className="jakimanka-card-distance">2 минуты, 300 м</p>
              </div>
              <div className="jakimanka-card-item">
                <h6 className="jakimanka-card-location">Третьяковская галерея</h6>
                <p className="jakimanka-card-distance">14 минут, 4 км</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};