import { useState } from "react";
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

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <Navbar>
        <Logo />
        <Search />
        <NumResult movies={movies} />
      </Navbar>

      <Main>
        <Box element={<MovieList movies={movies} />} />
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
