import React from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';

const Name = styled.h1`
  margin-bottom: 0;
  margin-top: 25px;
  font-family: "Philosopher", sans-serif;
  font-weight: bold;
`;

const Address = styled.p`
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.57;
  color: #a9afb6;
`;

const Button = styled.button`
  align-self: flex-start;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 0.625rem;
  margin-top: 1.5rem;
  font-weight: 300;
  line-height: 1.0;
  color: #00779a;
  background-color: white;
  border: solid 1px #e0e0e1;
  border-radius: 2px;
  cursor: pointer;
`;

const Location = styled.div`
`;

export default () => {
  return (
    <Grid>
      <Row between="xs">
        <Location>
          <Name>Жилой комплекс «Полянка/44»</Name>
          <Address>Район Якиманка, улица Большая Полянка, дом 44 • 119180</Address>
        </Location>
        <Button>В избранное</Button>
      </Row>
    </Grid>
  );
};