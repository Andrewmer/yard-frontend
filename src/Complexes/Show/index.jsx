import React from 'react';
import BodyClassName from 'react-body-classname';
import styled from 'styled-components';

import ComplexHeader from './ComplexHeader';
import Gallery from './Gallery';
import Details from './Details';
import Characteristics from './Characteristics';
import Description from './Description';
import Structure from './Structure';
import Offers from './Offers';
import Guide from './Guide';

const Complex = styled(BodyClassName)`
  background: white;
`;

export default () =>
  (<Complex>
    <div className="App">
      <ComplexHeader />
      <Gallery />
      <Details
        offers="950"
        architect="John McAslan + Partners"
        builder="Группа «ПСН»"
      />
      <Characteristics
        flat="1 503"
        status="Квартиры"
        price={{ min: 8.4, max: 20.2 }}
      />
      <Description />
      <Structure />
      <Offers />
      <Guide />
    </div>
  </Complex>);
