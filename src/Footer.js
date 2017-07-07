import React from 'react';
import arrowIcon from './arrow-icon.svg';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

const Footer = styled.footer`
  background-color: #111111;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Heading = styled.h4`
  font-family: "Fira Sans";
  font-size: 0.875rem;
  color: #646971;
  margin-top: 0;
  margin-bottom: 0.9rem;
  font-weight: bold;
  line-height: 1.5;
  font-weight: 700;
`;

const Info = styled.p`
  font-family: "Fira Sans";
  font-size: 0.875rem;
  font-weight: 300;
  color: #a9afb6;
  margin-bottom: 1rem;
`;

const InfoLast = styled.p`
  font-family: "Fira Sans";
  font-size: 0.875rem;
  font-weight: 300;
  color: #a9afb6;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
`;

const Navigation = styled.nav`
  border-top: solid 2px #3e4247;
  padding-top: 1rem;
`;

const NavLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-family: "Fira Sans";
  font-size: 0.875rem;
  font-weight: 300;
  color: white;
  margin-bottom: 1rem;
`;

const NavLinkLast = styled(Link)`
  display: block;
  text-decoration: none;
  font-family: "Fira Sans";
  font-size: 0.875rem;
  font-weight: 300;
  color: white;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
`;

const NavIcon = styled.img`
  margin-left: 0.5rem;
`;

const Rights = styled.p`
  font-family: "Fira Sans";
  font-size: 11px;
  font-weight: 300;
  color: #a9afb6;
  line-height: 1.6;
  padding-top: 4.5rem;
`;

export default () => {
  return (
    <Footer>
      <Grid>
        <Row>
          <Col xs={4}>
            <Heading>ООО «Ярд»</Heading>
            <Info>ОГРН 1175074002531</Info>
            <Info>ИНН 5036165365</Info>
            <InfoLast>+7 (999) 821-14-88</InfoLast>
          </Col>
          <Col xs={2}>
            <Navigation>
              <Heading>Жилые комплексы</Heading>
              <NavLink to="/">ВТБ Арена Парк</NavLink>
              <NavLink to="/">Садовые кварталы</NavLink>
              <NavLink to="/">Резиденция Монэ</NavLink>
              <NavLinkLast to="/">Все ЖК Москвы<NavIcon src={arrowIcon} /></NavLinkLast>
            </Navigation>
          </Col>
          <Col xs={2}>
            <Navigation>
              <Heading>Компания</Heading>
              <NavLink to ="/">Команда</NavLink>
              <NavLink to ="/">О компании</NavLink>
            </Navigation>
          </Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={4}>
            <Rights>
              Любая информация, представленная на данном сайте, носит исключительно информационный 
              характер и ни при каких условиях не является публичной офертой, определяемой положениями 
              статьи 437 ГК РФ. © ООО «Ярд», 2017
            </Rights>
          </Col>
        </Row>
      </Grid>
    </Footer>
  );
};