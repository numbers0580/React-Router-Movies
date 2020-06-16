import React from 'react';

const MovieCard = props => {
  //const {cardData} = props; // See comment in MovieList.js for explanation why I removed this line
  const { cTitle, cDir, cMeta, cStars } = props;
  return (
    <div className="movie-card">
      <h2>{cTitle}</h2>
      <div className="movie-director">
        Director: <em>{cDir}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{cMeta}</strong>
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
