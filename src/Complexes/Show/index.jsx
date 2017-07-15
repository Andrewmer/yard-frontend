import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';
import styled from 'styled-components';

import { securityKinds, constructionKinds, quarters } from './Dictionary';
import ComplexHeader from './ComplexHeader';
import Gallery from './Gallery';
import Details from './Details';
import Characteristics from './Characteristics';
import Description from './Description';
import Structure from './Structure';
import Offers from './Offers';
import Guide from './Guide';

const Show = styled(BodyClassName)`
  background: white;
`;

class Complex extends Component {
  constructor() {
    super();
    this.state = {
      complex: [],
    };
  }
  componentDidMount() {
    fetch(`https://yard.moscow/api/v1/complexes/${this.props.match.params.id}`)
      .then(response => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ complex: json });
      });
  }
  render() {
    const location = this.state.complex.location || {};
    const details = this.state.complex.details || {};
    const statistics = this.state.complex.statistics || {};
    const images = this.state.complex.images || [];

    const {
      propertyKind,
      maintenanceCosts,
      startYear,
      commissioningYear,
      parkings,
      undergroundGarages,
    } =
      details || {};

    const { street, house, subLocalityName } = location || {};

    return (
      <Show>
        <div className="App">
          <ComplexHeader
            name={this.state.complex.name}
            address={subLocalityName}
            street={street}
            house={house}
          />
          <Gallery images={images} />
          <Details
            count={statistics.propertiesCount}
            architect={details.architect}
            builder="Группа «ПСН»"
          />
          <Characteristics
            counter={statistics.propertiesCount}
            status={propertyKind}
            price={{ min: statistics.price.from.rub, max: statistics.price.to.rub }}
            ceilheight={{ min: details.ceilHeight.from, max: details.ceilHeight.to }}
            startYear={startYear}
            commissioningYear={commissioningYear}
            parkings={parkings}
            undergroundGarages={undergroundGarages}
            maintenanceCosts={maintenanceCosts}
            totalArea={{ min: statistics.totalArea.from, max: statistics.totalArea.to }}
          />
          <Description />
          <Structure />
          <Offers />
          <Guide />
        </div>
      </Show>
    );
  }
}

export default Complex;
