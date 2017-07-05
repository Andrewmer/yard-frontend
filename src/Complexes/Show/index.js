import React from 'react';
import BodyClassName from 'react-body-classname';

import ComplexName from './ComplexName';
import Gallery from './Gallery';
import Details from './Details';
import Characteristics from './Characteristics';
import Description from './Description';
import Structure from './Structure';
import Offers from './Offers';
import Jakimanka from './Jakimanka';

export default () => {
  return (
    <BodyClassName className="bg-white">
      <div className="bg-complex">
        <ComplexName />
        <Gallery />
        <Details />
        <Characteristics />
        <Description />
        <Structure />
        <Offers />
        <Jakimanka />
      </div>
    </BodyClassName>
  );
};