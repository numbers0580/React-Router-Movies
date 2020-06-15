import React from 'react';
import {Link} from 'react-router-dom';
import MovieCard from "./MovieCard";

const MovieList = props => {
  const {movieData} = props;
  return (
    <div className="movie-list">
      {movieData.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    <Link to={`/movies/${movie.id}`}>
      {/* Stretch Below */}
      <MovieCard cTitle={title} cDir={director} cMeta={metascore} cStars={stars} />
    </Link>
  );
}

export default MovieList;
