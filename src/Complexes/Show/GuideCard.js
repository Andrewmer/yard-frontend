import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  padding: 1.5rem;
  padding-bottom: 1.57rem;
  border-bottom: solid 1px #e0e0e1;
`;

const Location = styled.h6`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.38;
  color: #3e4247;
`;

const Distance = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.38;
  color: #a9afb6;
`;

export default props => {
  return (
    <Item>
      <Location>
        {props.location}
      </Location>
      <Distance>
        {props.distance}
      </Distance>
    </Item>
  );
};