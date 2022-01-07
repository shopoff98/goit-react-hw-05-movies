import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "./MovieInfo";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=772142c0282e327b3dd3decd2c93164e&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [movieId]);

  if (movie === null) {
    return <></>;
  } else {
    return <MovieInfo movie={movie} />;
  }
}
