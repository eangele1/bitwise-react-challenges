const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export const getMoviesBySearchTerm = async (input, typeState, page_num) => {
  //API URL
  const URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${input}&type=${typeState}&page=${page_num}`;

  //checks to see if fetch works out, otherwise return an error
  try {
    const response = await fetch(URL);
    const jsonData = await response.json();
    return jsonData;
  } catch(e){
    console.log(e);
    const err = { Error: String(e) };
    return err;
  }
}

export const getMovieDetailsById = async (input) => {
  //API URL
  const URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${input}`;

  //checks to see if fetch works out, otherwise return an error
  try {
    const response = await fetch(URL);
    const jsonData = await response.json();
    return jsonData;
  } catch(e){
    console.log(e);
    const err = { Error: String(e) };
    return err;
  }
}
