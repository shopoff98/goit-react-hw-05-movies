import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";
import MovieListItem from "./MoviesListItem";
import { fetchSearchMovies } from "../../services/fetchApi";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const currentQuery = new URLSearchParams(location.search).get("query");
  useEffect(() => {
    if (currentQuery === null) {
      return;
    }
    fetchSearchMovies(currentQuery).then((data) => setMovies(data.results));
  }, [currentQuery, movieName]);

  function submitForm(query) {
    setMovieName(query);

    navigate({ ...location, search: `query=${query}` });
  }

  if (movies) {
    return (
      <>
        <SearchInput onSubmit={submitForm} />
        <MovieListItem movies={movies} />
      </>
    );
  } else {
    return <SearchInput onSubmit={submitForm} />;
  }
}
export default Movies;
