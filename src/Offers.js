import React from 'react';

export default () => {
  return (
    <section className="offers">
      <div className="container">
        <h3 className="offers-heading">Предложения в ЖК «Полянка/44»</h3>
        <div className="row">
          <div className="col-xs-4">
            <div className="offers-card">
              <h4 className="offers-card-heading">1-комнатные квартиры</h4>
              <p className="offers-card-value"><small className="offers-card-key">Площадь</small>от 59 до 120 м²</p>
              <p className="offers-card-value"><small className="offers-card-key">Стоимость</small>от 20.3 до 84.2 млн руб</p>
              <button className="offers-button">Посмотреть предложения</button>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="offers-card">
              <h4 className="offers-card-heading">2-комнатные квартиры</h4>
              <p className="offers-card-value"><small className="offers-card-key">Площадь</small>от 59 до 120 м²</p>
              <p className="offers-card-value"><small className="offers-card-key">Стоимость</small>от 20.3 до 84.2 млн руб</p>
              <button className="offers-button">Посмотреть предложения</button>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="offers-card">
              <h4 className="offers-card-heading">3-комнатные квартиры</h4>
              <p className="offers-card-value"><small className="offers-card-key">Площадь</small>от 59 до 120 м²</p>
              <p className="offers-card-value"><small className="offers-card-key">Стоимость</small>от 20.3 до 84.2 млн руб</p>
              <button className="offers-button">Посмотреть предложения</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};