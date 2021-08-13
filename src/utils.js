export async function getMoviesBySearchTerm(input) {
  //API Key
  const apiKey = 'API KEY HERE'
  //API URL
  const URL = `http://www.omdbapi.com/?apikey=${apiKey}&s=${input}`;

  //checks to see if fetch works out, otherwise return an error
  try {

    const response = await fetch(URL);
    const jsonData = await response.json();

    /*
    * main requirement is fulfilled, extra code below is optional
    * for displaying data properly in a UI 
    */
    console.log(jsonData);

    let arr = [];

    // extracts keys and values from json object and converts
    // into arrays
    const propertyKeys = Object.keys(jsonData);
    const propertyValues = Object.values(jsonData);

    // checks if result returns error
    for (const i in propertyKeys) {
      if(propertyKeys[i] === "Error"){
        document.getElementById("output").innerHTML = propertyKeys[i] + ": " + propertyValues[i];
        return;
      }
    }

    // if no error, adds data to array
    for (var i = 0; i < jsonData.Search.length; i++) {
      arr.push(jsonData.Search[i].Title);
    }
    
    // writes array data to div
    document.getElementById("output").innerHTML = arr.join('<br>');

  } catch(e){
    console.log(e);
  }

}

export async function getMovieDetailsById(input) {
  //API Key
  const apiKey = 'API KEY HERE'
  //API URL
  const URL = `http://www.omdbapi.com/?apikey=${apiKey}&i=${input}`;

  //checks to see if fetch works out, otherwise return an error
  try {

    const response = await fetch(URL);
    const jsonData = await response.json();

    /*
    * main requirement is fulfilled, extra code below is optional
    * for displaying data properly in a UI 
    */
    console.log(jsonData);

    // extracts keys and values from json object and converts
    // into arrays
    const propertyKeys = Object.keys(jsonData);
    const propertyValues = Object.values(jsonData);

    let arr = [];
    
    // checks if result returns error and adds result to array
    for (var i = 0; i < propertyKeys.length; i++) {
      if(propertyKeys[i] !== "Response"){
        arr.push(propertyKeys[i] + ": " + propertyValues[i]);
      }
    }

    // writes array result to div
    document.getElementById("output").innerHTML = arr.join('<br>');

  } catch(e){
    console.log(e);
  }

}
