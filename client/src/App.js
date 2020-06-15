import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';

import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          console.log(response.data);
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    // <BrowserRouter>
    //   <div>
    //     <SavedList list={savedList} />
    //     {/* <Route exact path="/" component={MovieList} /> */}
    //     <MovieList movieData={movieList} />
    //   </div>
    // </BrowserRouter>
    <div>
      <BrowserRouter>
        <SavedList list={savedList} />
        <Switch>
          <Route exact path='/'>
            <MovieList movieData={movieList} />
            {/* <MovieCard cardData={movieList} /> */}
          </Route>
          <Route path='/movies/:id'>
            <Movie />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
