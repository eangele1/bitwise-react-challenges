import MovieCard from "./MovieCard";

const MovieList = ( { movies = [], onClick } ) => {
    return(
        <div id="output">
            {movies.map((movie) => (
                <MovieCard onClick={onClick} key={movie.imdbID} value={movie} />
            ))}
        </div>
    );
}


export default MovieList;