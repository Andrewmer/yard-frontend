import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import GuideCard from './GuideCard';

const Guide = styled.section`
  padding-top: 4rem;
  padding-bottom: 13.625rem;
  margin-bottom: 13.5rem;
  background-color: #3e4247;
  color: white;
`;

const Heading = styled.h5`
  margin: 0;
  margin-top: 7.5rem;
  margin-bottom: 3rem;
  font-family: "Philosopher", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #a9afb6;
`;

const Description = styled.h2`
  margin: 0;
  margin-bottom: 3.2rem;
  font-family: "Philosopher", sans-serif;
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.25;
  color: #ffffff;
`;

const Link = styled.h2`
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;
  color: #00779a;
  text-decoration: none;
`;

const Cards = styled.div`
  position: absolute;
  width: 36.5rem;
  margin-top: 4rem;
  background-color: #ffffff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`;

const MapImg = styled.img`
  position: absolute;
  margin-top: 4rem;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`;

const FieldImg = styled.img`
  width: 100%;
  height: 568px;
`;

export default () => {
  return (
    <Guide>
      <Grid>
        <Row>
          <Col xs={6}>
            <Heading>Якиманка</Heading>
            <Description>Исторический центр Москвы в двух<br /> километрах от Кремля</Description>
            <Link to="/">Гид по Якиманке →</Link>
          </Col>
          <Col xs={6}>
            <FieldImg
              src={process.env.PUBLIC_URL + './img/polyanka-photo.png'}
              alt="Полянка"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <MapImg
              src={process.env.PUBLIC_URL + './img/map.png'}
              alt="Карта"
            />
          </Col>
          <Col xs={6}>
            <Cards>
              <GuideCard 
                location="Красный Октябрь"
                distance="24 минуты, 6 км"
              />
              <GuideCard 
                location="World class"
                distance="2 минуты, 300 м"
              />
              <GuideCard 
                location="Третьяковская галерея"
                distance="14 минут, 4 км"
              />
            </Cards>
          </Col>
        </Row>
      </Grid>
    </Guide>
  );
};