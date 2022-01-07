import { useEffect, useState } from "react";
import MovieListItem from "../SearchMovies/MoviesListItem";
import { fetchTrendMovies } from "../../services/fetchApi";

function HomePage() {
  const [trendMovie, setTrendMovie] = useState([]);

  useEffect(() => {
    fetchTrendMovies().then((data) => setTrendMovie(data.results));
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      <MovieListItem movies={trendMovie} />
    </>
  );
}
export default HomePage;
