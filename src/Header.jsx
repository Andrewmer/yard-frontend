import React from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import headerLogo from './compass-logo.svg';


const Header = styled.header`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  background-color: white;
  border-bottom: solid 1px #eaebf0;
`;

const Navigation = styled.nav`
  text-align: right;
  margin-left: auto;
`;

const NavLink = styled(Link)`
  margin-right: 2rem;
  font-size: 1rem;
  color: #3e4247;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
`;

const Logo = styled.img`
  height: 1.5rem;
`;

export default () =>
  (<Header>
    <Grid>
      <Row>
        <Logo src={headerLogo} />
        <Navigation>
          <NavLink to="/">Купить</NavLink>
          <NavLink to="/">Снять</NavLink>
          <NavLink to="/">Наши агенты</NavLink>
        </Navigation>
      </Row>
    </Grid>
  </Header>);
