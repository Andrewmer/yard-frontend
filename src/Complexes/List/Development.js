import React from 'react';
import developmentLogo from '../../compass-development-logo.svg';
import styled from 'styled-components';

const Development = styled.section`
  background-color: #161616;
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const Logo = styled.img`
  width: 418.9px;
  height: 131px;
`;

export default () => {
  return (
    <Development>
      <Logo src={developmentLogo} />
    </Development>
  );
};