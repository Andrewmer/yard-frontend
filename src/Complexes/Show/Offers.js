import React from 'react';
import OffersCard from './OffersCard'

export default () => {
  return (
    <section className="offers">
      <div className="container">
        <h3 className="offers-heading">Предложения в ЖК «Полянка/44»</h3>
        <div className="row">
          <OffersCard 
            heading="1-комнатные квартиры"
            key1="Площадь"
            value1="от 59 до 120 м²"
            key2="Стоимость"
            value2="от 20.3 до 84.2 млн руб"
            button="Посмотреть предложения"
          />
          <OffersCard 
            heading="2-комнатные квартиры"
            key1="Площадь"
            value1="от 59 до 120 м²"
            key2="Стоимость"
            value2="от 20.3 до 84.2 млн руб"
            button="Посмотреть предложения"
          />
          <OffersCard 
            heading="3-комнатные квартиры"
            key1="Площадь"
            value1="от 59 до 120 м²"
            key2="Стоимость"
            value2="от 20.3 до 84.2 млн руб"
            button="Посмотреть предложения"
          />
        </div>
      </div>
    </section>
  );
};