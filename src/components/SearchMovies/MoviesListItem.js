import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function MovieListItem({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, original_title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
