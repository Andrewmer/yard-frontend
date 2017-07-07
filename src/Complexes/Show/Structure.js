import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Structure = styled.div`
  padding-bottom: 3.5rem;
  border-top: solid 1px #eaebf0;
`;

const Heading = styled.h3`
  margin-top: 2.2rem;
  margin-bottom: 1rem;
  font-family: "Philosopher", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.13;
  color: #3e4247;
`;

const Item = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.38;
  color: #3e4247;
`;

export default () => {
  return (
    <Grid>
      <Structure>
        <Heading>Инфраструктура</Heading>
        <Row>
          <Col xs={2}>
            <Item>Бассейн</Item>
            <Item>Частная школа</Item>
          </Col>
          <Col xs={2}>
            <Item>Детский сад</Item>
            <Item>Частная школа</Item>
          </Col>
          <Col xs={2}>
            <Item>Частная школа</Item>
            <Item>Частная школа</Item>
          </Col>
          <Col xs={2}>
            <Item>Бассейн</Item>
          </Col>
          <Col xs={2}>
            <Item>Детский сад</Item>
          </Col>
          <Col xs={2}>
            <Item>Частная школа</Item>
          </Col>
        </Row>
      </Structure>
    </Grid>
  );
};