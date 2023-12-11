import Logo from "./Logo";
import NumResult from "./NumResult";
import Search from "./Search";

function Navbar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResult movies={movies} />
    </nav>
  );
}

export default Navbar;
