import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Heading = styled.h2`
  margin-top: 4rem;
  margin-bottom: 0;
  font-weight: bold;
  color: #3e4247;
  font-family: "Fira Sans";
  font-size: 1.5rem;
`;

const Info = styled.p`
  margin-top: 0.5rem;
  font-family: 'Fira Sans';
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  color: #3e4247;
`;

const Button = styled.button`
  background-color: black;
  margin-top: 1rem;
  margin-bottom: 4rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-family: 'Fira Sans', sans-serif;
  font-size:1rem;
  text-align: center;
  color: white;
  border: 0;
`;

export default () => {
  return (
    <Row center="xs">
      <Col xs={8}>
        <Heading>Discover Our New Development</Heading>
        <Info>
          Compass brings a modern approach to new development marketing and sales. 
          From boutique rental conversions to luxurious ground-up condominiums, 
          browse our portfolio of current offerings.
        </Info>
        <Button>Contact The Team</Button>
      </Col>
    </Row>
  );
};