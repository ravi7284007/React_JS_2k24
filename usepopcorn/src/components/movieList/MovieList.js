import Movie from "./Movie";

function MovieList({ movies, handleSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          onSelectMovie={handleSelectMovie}
        />
      ))}
    </ul>
  );
}

export default MovieList;
