import React from 'react';
import {Link} from 'react-router-dom';

const MovieCard = props => {
  //const {cardData} = props;
  const { cTitle, cDirector, cMetascore, cStars } = props;
  return (
    <div className="movie-card">
      <h2>{cTitle}</h2>
      <div className="movie-director">
        Director: <em>{cDirector}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{cMetascore}</strong>
      </div>
      <h3>Actors</h3>

      {cStars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
