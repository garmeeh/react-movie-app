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

const Button = styled.button`
  padding: 0.5em;
  color: #ffffff;
  background: #3d4347;
  border: 1px solid #3d4347;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 10px;
`;

const SearchBar = ({ onChange, placeholder, onKeyDown, onSearch }) => (
  <div>
    <Input
      type="search"
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
    <Button onClick={onSearch}>Find Me The Movie!</Button>
  </div>
);

export default SearchBar;
