import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
    <BrowserRouter>
      <SavedList list={savedList} />
      <Switch>
        {/* Tried component={movieList} in Route tag below, but nested due to errors */}
        <Route exact path='/'>
          <MovieList movieData={movieList} />
          {/* <MovieCard cardData={movieList} /> */}
        </Route>
        {/* This component inside this Route worked, though. I assume because I wasn't passing an object to props */}
        <Route path='/movies/:id' component={Movie} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
