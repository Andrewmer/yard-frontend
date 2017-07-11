import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  display: flex;
  background-color: white;
  margin-bottom: 3rem;
  text-decoration: none;
  transition: .3s ease-in;

  &:hover,
  &:active,
  &:focus {
    transition: .3s ease-in;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, .3);
  }
`;

const Img = styled.img`
  width: 484px;
  height: 350px;
`;

const Details = styled.article`
  border-bottom: 2px solid #646971;
`;

const District = styled.p`
  text-transform: uppercase;
  color: #646971;
  margin-top: 1.5rem;
  margin-left: 2rem;
  margin-bottom: 1.5rem;
  font-family: "Monaco", "Menlo", "Consolas", monospace;
  font-size: 1rem;
`;

const Address = styled.h3`
  color: #000000;
  margin-left: 2rem;
  margin-bottom: 0.5rem;
  margin-top: 0px;
  font-family: "Fira Sans";
  font-weight: bold;
  font-size: 40px;
  line-height: 1.4;
`;

const Text = styled.p`
  margin-left: 2rem;
  margin-right: 5.375rem;
  color: #3e4247;
  font-family: "Fira Sans";
  line-height: 1.5;
`;

export default props =>
  (<Card to="/complex">
    <Img src={props.src} />
    <Details>
      <District>{props.district}</District>
      <Address>{props.address}</Address>
      <Text>{props.children}</Text>
    </Details>
  </Card>);
