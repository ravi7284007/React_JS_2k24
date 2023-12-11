import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { tempMovieData } from "./components/data";

import Main from "./components/Main";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <Navbar movies={movies} />

      <Main movies={movies} />
    </>
  );
}
