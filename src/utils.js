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
    console.log(jsonData.Search);

    return jsonData.Search;

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

    return jsonData

  } catch(e){
    console.log(e);
  }
}
