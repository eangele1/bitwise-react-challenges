import './App.css';
import { getMoviesBySearchTerm, getMovieDetailsById } from './utils';
import React, { useState } from 'react';
import MovieDetails from './components/MovieDetails.js'
import Spinner from './components/Spinner.js';
import Modal from './components/Modal.js';
import MovieList from './components/MovieList';
import Paginator from './components/Paginator';

function App() {
  // React Hooks states
  const [searchTerm, setSearchTerm] = useState("");
  const [lastSearchTerm, setLastSearchTerm] = useState("");

  const [isLoading, setLoadState] = useState(false);
  const [DialogState, setDialogState] = useState(false);

  const [movies, setMovies] = useState([]);
  const [typeState, setTypeState] = useState("");
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const [resultsNum, setResultsNum] = useState(0);
  const [currPage, setCurrPage] = useState(1);

  const searchSubmit = async (input, page_num) => {
    console.log(input, page_num)
    setError(null);
    setMovies([]);
    setLoadState(true);

    var obj = await getMoviesBySearchTerm(input, typeState, page_num);
    const propertyKeys = Object.keys(obj);

    if (propertyKeys.includes("Error")) {
      setError(<p>Error: {obj.Error}</p>);
      setLoadState(false);
      return;
    }

    setResultsNum(parseInt(obj.totalResults));
    setMovies(obj.Search);
    setLoadState(false);
  }

  const IDSearchSubmit = async (input) => {
    setDetails(null);
    setDialogState(true);

    var obj = await getMovieDetailsById(input);
    setDetails(<MovieDetails key={0} value={obj} />);
  }

  //FOR FUN: lets user use the enter key to submit the value given in the input
  const keyPress = (e) => {
    if (e.keyCode === 13) {
      if (searchTerm === "") return;
      setCurrPage(1);
      setLastSearchTerm(searchTerm);
      searchSubmit(searchTerm, 1);
      setSearchTerm("");
    }
  };

  return (
    <div className="App">
      <Modal children={details} isOpen={DialogState} onClose={(e) => setDialogState(false)} />
      {/* App Logo */}
      <img style={{ width: 150, paddingBottom: 20 }} src="https://www.nicepng.com/png/full/363-3636365_movie-camera-clipart-png-film-camera-vector-png.png" alt="W3Schools.com" />

      {/* App Name */}
      <h1 style={{ margin: 0 }}>
        Movie Search
      </h1>
      <br />

      {/* user input */}
      <input
        type="text"
        onKeyDown={keyPress}
        placeholder="Search"
        value={searchTerm}
        onChange={e => setSearchTerm(String(e.target.value))}
      />
      <select onChange={(e) => setTypeState(e.target.value)} value={typeState}>
      <option value="">type</option>
        <option value="movie">movie</option>
        <option value="series">series</option>
        <option value="episode">episode</option>
        <option value="game">game</option>
      </select>
      <br />
      <br />

      {/* Displays whatever data is returned */}
      <Spinner LoadState={isLoading} />
      <div>{error}</div>
      <Paginator
        movies={movies}
        lastSearchTerm={lastSearchTerm}
        currPage={currPage}
        resultsNum={resultsNum}
        setCurrPage={setCurrPage}
        searchSubmit={searchSubmit}
      />
      <MovieList onClick={IDSearchSubmit} movies={movies} />
    </div>
  );
}

export default App;
