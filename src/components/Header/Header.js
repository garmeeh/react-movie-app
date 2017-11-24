import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 10px 0;
`;

const Heading = styled.h1`
  font-size: 22px;
  margin: 0;
`;

const Header = () => (
  <StyledHeader>
    <Heading>Movies</Heading>
  </StyledHeader>
);

export default Header;
