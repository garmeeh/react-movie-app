import React from 'react';
import {
  CardContainer,
  CardMedia,
  CardBody,
  CardTitle,
  CardYear,
  CardImage
} from './CardStyles';

const Card = ({ Title, Year, Poster = null }) => (
  <CardContainer>
    <CardMedia>{Poster && <CardImage src={Poster} />}</CardMedia>
    <CardBody>
      <CardTitle>{Title}</CardTitle>
      <CardYear>{Year}</CardYear>
    </CardBody>
  </CardContainer>
);

export default Card;
