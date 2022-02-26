import React from "react";
import { Card } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: "250px", marginLeft: "1rem" }}>
        <Card.Img variant="top" src={movie.posterurl} />
        <Card.Body>
          <Card.Title>{movie.name}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Rating size={20} initialValue={movie.rate} readonly />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
