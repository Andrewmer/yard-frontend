import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  padding: 1.5rem 2rem;
  background-color: white;
`;

const Heading = styled.h4`
  margin: 0;
  font-family: Philosopher, sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.1;
  color: #3e4247;
`;

const Key = styled.small`
  display: block;
  margin: 0;
  margin-top: 1.5rem;
  font-size: 1rem;
  line-height: 1.38;
  color: #a9afb6;
`;

const Value = styled.p`
  display: block;
  margin: 0;
  margin-top: 0.625rem;
  font-size: 1rem;
  line-height: 1.38;
  color: #3e4247;
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 2.2rem;
  padding: 0.75rem 2rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.0;
  color: white;
  text-align: center;
  background-color: #000000;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;

export default props =>
  <Card>
    <Heading>{props.roomsCount}-комнатные квартиры</Heading>
    <Key>Площадь</Key>
    <Value>от {props.area.min} до {props.area.max} м²</Value>
    <Key>Стоимость</Key>
    <Value>от {props.price.min} до {props.price.max} млн руб</Value>
    <Button>Посмотреть предложения</Button>
  </Card>;