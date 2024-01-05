import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { tempMovieData, tempWatchedData } from "./components/data";
import NumResult from "./components/navbar/NumResult";
import Logo from "./components/navbar/Logo";
import Search from "./components/navbar/Search";
import Main from "./components/Main";
import MovieList from "./components/movieList/MovieList";
import Box from "./components/Box";
import WatchedSummary from "./components/WatchList/WatchedSummary";
import WatchedMovieList from "./components/WatchList/WatchedMovieList";
import SelectedMovie from "./components/selectedMovie/SelectedMovie";

const KEY = `a15d2a7`;

export default function App() {
  const [query, setQuery] = useState("inception");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedID] = useState(null);

  function handleSelectMovie(id) {
    setSelectedID((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie(id) {
    setSelectedID(null);
  }

  useEffect(
    function () {
      const fetchMovie = async () => {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );

          if (!res.ok)
            throw new Error("Something went wrong with Fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
        } catch (error) {
          console.error(error.message);
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovie();
    },
    [query]
  );

  return (
    <>
      <Navbar>
        <Logo />
        <Search setQuery={setQuery} query={query} />
        <NumResult movies={movies} />
      </Navbar>

      <Main>
        {/* {isLoading ? (
          <Loader />
        ) : (
          <Box element={<MovieList movies={movies} />} />
        )} */}
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList handleSelectMovie={handleSelectMovie} movies={movies} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <SelectedMovie
              onCloseMovie={handleCloseMovie}
              selectedId={selectedId}
              KEY={KEY}
            />
          ) : (
            <>
              {" "}
              <WatchedSummary watched={watched} />
              <WatchedMovieList watched={watched} selectedId={selectedId} />
            </>
          )}{" "}
        </Box>
      </Main>
    </>
  );
}

function Loader() {
  return <p className="loader">Loading.....</p>;
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔</span> {message}
    </p>
  );
}
