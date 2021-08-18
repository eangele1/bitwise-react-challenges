// functional component for MovieCard
const MovieCard = ({value}) => {
    return (
      <div id="MovieCard">
        <img src={value.Poster} alt={value.Title} />
        <h3>{value.Title}</h3>
        <p>{value.Type[0].toUpperCase() + value.Type.substring(1)}</p>
      </div>
    );
  }

export default MovieCard;