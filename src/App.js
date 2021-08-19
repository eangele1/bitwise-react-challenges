import './App.css';
import * as utilities from './utils.js'
import React, { useState } from 'react';
import MovieCard from './components/MovieCard.js';
import MovieDetails from './components/MovieDetails.js'
import Spinner from './components/Spinner.js';

function App() {
  // takes and stores user input using React Hooks
  const [searchTerm, setSearchTerm] = useState("");
  const [IDSearchTerm, setIDSearchTerm] = useState("");

  // stores a loading state for UI to display
  const [isLoading, setLoadState] = useState(false);

  // stores user interface output
  const [UIOutput, setUIOutput] = useState(null);

  async function searchSubmit(input, choice){
    setUIOutput(null);
    setLoadState(true);

    if (input === ""){
      setLoadState(false);
      return;
    }

    var obj = null;

    switch(choice){
      case 0:
      obj = await utilities.getMoviesBySearchTerm(input);
        break;
      case 1:
      obj = await utilities.getMovieDetailsById(input);
        break;
      default:
        break;
    }

    // extracts keys from json object and converts into array
    const propertyKeys = Object.keys(obj);

    if(propertyKeys.includes("Error")){
      setUIOutput(<p>Error: {obj.Error}</p>);
      setLoadState(false);
      return;
    }

    if(choice === 0){
      // initializes array that will contain our UI components to render to the screen
      let outputArr = [];
      for (const i in obj.Search) {
        outputArr.push(<MovieCard key={i} value={obj.Search[i]} />);
      }
      setUIOutput(outputArr);
    }

    if (choice === 1) setUIOutput(<MovieDetails key={0} value={obj} />);

    setLoadState(false);
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
        <br/>
        <input type="text" placeholder="Title" onChange={e => setSearchTerm(String(e.target.value))} />
        <button onClick={() => searchSubmit(searchTerm, 0)}>Submit</button>
        <br/>
        <br/>

        {/* Second user input; searches specific movie by IMDb ID */}
        <label>Search by IMDb ID:</label>
        <br/>
        <input type="text" placeholder="ID" onChange={e => setIDSearchTerm(String(e.target.value))} />
        <button onClick={() => searchSubmit(IDSearchTerm, 1)}>Submit</button>
        <br/>
        <br/>

        {/* Displays whatever state the app is in and what data is returned */}
        <label>–Output–</label>
        <br/>
        <Spinner LoadState={isLoading} />
        <div id="output">{UIOutput}</div>
      </header>
    </div>
  );
}

export default App;
