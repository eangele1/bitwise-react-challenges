import './App.css';
import * as utilities from './utils.js'
import React, { useState } from 'react';
import MovieCard from './MovieCard.js';
import MovieDetails from './MovieDetails.js'

function App() {
  // takes and stores user input using React Hooks
  const [searchInput, setSearchInput] = useState("");
  const [identificationInput, setIdentificationInput] = useState("");

  // stores user interface output
  const [UIOutput, setUIOutput] = useState(null);

  async function searchSubmit(input){
    var arr = await utilities.getMoviesBySearchTerm(input);
    let outputArr = [];
    for (const i in arr) {
      outputArr.push(<MovieCard key={i} value={arr[i]} />);
    }
    setUIOutput(null);
    setUIOutput(outputArr);
  }
  
  async function IDSubmit(input){
    var obj = await utilities.getMovieDetailsById(input);

    // extracts keys from json object and converts into array
    const propertyKeys = Object.keys(obj);

    let outputArr = [];

    if(propertyKeys.includes("Error")){
      setUIOutput(null);
    }
    else{
      outputArr.push(<MovieDetails key={0} value={obj} />);
      setUIOutput(null);
      setUIOutput(outputArr);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* App Logo */}
        <img style={{ width: 150, paddingBottom: 20 }} src="https://www.nicepng.com/png/full/363-3636365_movie-camera-clipart-png-film-camera-vector-png.png" alt="W3Schools.com" />
        
        {/* App Name */}
        <h1 style={{margin: 0}}>
          Movie Search
        </h1>
        <br/>
        {/* First user input; searches movies by title */}
        <label>Search by Title:</label>
        <input type="text" placeholder="Title" onChange={e => setSearchInput(e.target.value)} />
        <button onClick={() => searchSubmit(searchInput)}>Submit</button>
        <br/>
        {/* Second user input; searches specific movie by IMDb ID */}
        <label>Search by IMDb ID:</label>
        <input type="text" placeholder="ID" onChange={e => setIdentificationInput(e.target.value)} />
        <button onClick={() => IDSubmit(identificationInput)}>Submit</button>
        <br/>
        <label>–Output–</label>
        <div id="output">{UIOutput}</div>
      </header>
    </div>
  );
}

export default App;
