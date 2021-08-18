// functional component for MovieDetails
const MovieDetails = ({value}) => {
    return (
      <div id="MovieDetails">
        <div className="twoColumn">
          <img src={value.Poster} alt={value.Title} />
        </div>
        <div className="twoColumn">
          <h2>{value.Title}</h2>
          <p className="details">{value.Rated}</p>
          <p className="details">{value.Runtime}</p>
          <p className="details">{value.Genre}</p>
          <br/>
          <br/>
          <h3>Plot</h3>
          <p>{value.Plot}</p>
          <br/>
          <h3>Actors</h3>
          <p>{value.Actors}</p>
          <br/>
          {value.Ratings.map((movie, index) => (
            <p key={index} >{movie.Source}: {movie.Value}</p>
          ))}
        </div>
      </div>
    );
  }

export default MovieDetails;