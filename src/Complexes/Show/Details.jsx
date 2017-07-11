import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

const Details = styled.section`
  display: flex;
  padding-top: 2.5rem;
  padding-bottom: 1.6rem;
  border-bottom: solid 1px #e0e0e1;
`;

const Item = styled.div`
  margin-right: 3rem;
`;

const Heading = styled.h2`
  margin: 0;
  font-family: "Philosopher", sans-serif;
  font-weight: bold;
  line-height: 1.13;
  color: #3e4247;
`;

const Subheading = styled.small`
  display: block;
  margin-top: 0.6rem;
  font-family: "Fira Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.57;
  color: #a9afb6;
`;

export default props =>
  (<Grid>
    <Details>
      <Item>
        <Heading>{props.offers}<Subheading>предложений</Subheading></Heading>
      </Item>
      <Item>
        <Heading>{props.architect}<Subheading>архитектор</Subheading></Heading>
      </Item>
      <Item>
        <Heading>{props.builder}<Subheading>застройщик</Subheading></Heading>
      </Item>
    </Details>
  </Grid>);
