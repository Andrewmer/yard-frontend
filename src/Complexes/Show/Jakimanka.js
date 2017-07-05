import React from 'react';
import jakimankaImg from '../../img/polyanka-photo.png';
import jakimankaMap from '../../img/map.png';
import JakimankaCard from './JakimankaCard';

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
              <JakimankaCard 
                location="Красный Октябрь"
                distance="24 минуты, 6 км"
              />
              <JakimankaCard 
                location="World class"
                distance="2 минуты, 300 м"
              />
              <JakimankaCard 
                location="Третьяковская галерея"
                distance="14 минут, 4 км"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};