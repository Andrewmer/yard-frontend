import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import OffersCard from './OffersCard';

const Offers = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: #f4f5f9;
`;

const Heading = styled.h3`
  margin: 0;
  margin-bottom: 1.5rem;
  font-family: Philosopher, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.13;
  color: #3e4247;
  text-align: center;
`;

export default () =>
  (<Offers>
    <Grid>
      <Heading>Предложения в ЖК «Полянка/44»</Heading>
      <Row>
        <Col xs={4}>
          <OffersCard
            roomsCount="1"
            area={{ min: 59, max: 120 }}
            price={{ min: 20.3, max: 84.2 }}
          />
        </Col>
        <Col xs={4}>
          <OffersCard
            roomsCount="2"
            area={{ min: 59, max: 120 }}
            price={{ min: 20.3, max: 84.2 }}
          />
        </Col>
        <Col xs={4}>
          <OffersCard
            roomsCount="3"
            area={{ min: 59, max: 120 }}
            price={{ min: 20.3, max: 84.2 }}
          />
        </Col>
      </Row>
    </Grid>
  </Offers>);
