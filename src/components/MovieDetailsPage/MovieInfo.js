import {
  MovieInfoWrapper,
  AddInfoWrapper,
  Button,
  Wrapper,
} from "../../styled/common/MovieDedetails/MovieDedetails.styled";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

export default function MovieInfo({ movie }) {
  const navigate = useNavigate();
  const location = useLocation();
  const userScore = Math.round((`${movie.vote_average}` * 100) / 10);
  const year = movie.release_date.substring(0, 4);

  function onGoBack() {
    navigate(location?.state?.from ?? "/");
  }

  return (
    <>
      <MovieInfoWrapper>
        <Wrapper>
          <Button type="button" onClick={onGoBack}>
            Go back
          </Button>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            width="250px"
          />
        </Wrapper>
        <AddInfoWrapper>
          <h2>
            {movie.title} ({year})
          </h2>
          <h3>Overview:</h3>
          <p>{movie.overview}</p>
          <p>
            <b>User Score:</b> {userScore}%
          </p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        </AddInfoWrapper>
      </MovieInfoWrapper>

      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
}

MovieInfo.propTypes = {
  moviee: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      release_date: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
        })
      ),
    })
  ),
};
