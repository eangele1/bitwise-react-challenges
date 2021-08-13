import './App.css';
import * as utilities from './utils.js'
import React, { useState } from 'react';

function App() {

  // takes and stores user input using React Hooks
  const [searchInput, setSearchInput] = useState("");
  const [identificationInput, setIdentificationInput] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.clipartmax.com/png/small/8-89896_film-icon-white-png.png" alt="W3Schools.com" />
        <h1>
          Movie Search
        </h1>
        <label>Search by Title:</label>
        <input type="text" placeholder="Title" onChange={e => setSearchInput(e.target.value)} />
        <button onClick={() => utilities.getMoviesBySearchTerm(searchInput)}>Submit</button>

        <label>Search by IMDb ID:</label>
        <input type="text" placeholder="ID" onChange={e => setIdentificationInput(e.target.value)} />
        <button onClick={() => utilities.getMovieDetailsById(identificationInput)}>Submit</button>

        <label>–Output–</label>
        <div id="output"></div>
      </header>
    </div>
  );
}

export default App;
