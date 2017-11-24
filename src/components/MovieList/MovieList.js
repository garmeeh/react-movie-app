import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Card from '../Card/Card';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
`;

const StyledNavLink = styled(NavLink)`
  color: #3d4347;
  text-decoration: none;
`;

const MovieList = ({ results = [] }) => (
  <List>
    {results.map((movie, index) => (
      <li key={`movie-${index}`}>
        <StyledNavLink to={`/movie/${movie.imdbID}`}>
          <Card {...movie} />
        </StyledNavLink>
      </li>
    ))}
  </List>
);

export default MovieList;
