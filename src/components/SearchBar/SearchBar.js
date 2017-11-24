import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  color: #3d4347;
  background: #ffffff;
  border: 1px solid #3d4347;
  border-radius: 3px;
  min-width: 20%;
`;

const SearchBar = ({ onChange, placeholder, onKeyDown }) => (
  <Input
    type="search"
    placeholder={placeholder}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
);

export default SearchBar;
