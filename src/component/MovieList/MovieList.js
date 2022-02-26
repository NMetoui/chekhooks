import React from "react";
import { Container } from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies, searchCondition, selectRating }) => {
  return (
    <div>
      <Container style={{ display: "flex", flexwrap: "wrap" }}>
        {movies
          .filter(
            (movie) =>
              movie.name
                .toLowerCase()
                .includes(searchCondition.toLowerCase()) &&
              movie.rate >= selectRating
          )
          .map((movie) => (
            <MovieCard movie={movie} />
          ))}
      </Container>
    </div>
  );
};

export default MovieList;
