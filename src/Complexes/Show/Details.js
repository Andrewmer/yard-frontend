import React from 'react';
import Detail from './Detail';

export default () => {
  return (
    <div className="container">
      <section className="details">
        <Detail
          heading="950"
          subheading="предложений"
        />
        <Detail
          heading="John McAslan + Partners"
          subheading="архитектор"
        />
        <Detail
          heading="Группа «ПСН»"
          subheading="застройщик"
        />
      </section>
    </div>
  );
};