import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "../../services/fetchApi";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(movieId).then((data) => setCast(data.cast));
  }, [movieId]);
  return (
    <ul>
      {cast.map((el) => {
        return (
          <li key={el.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${el.profile_path}`}
              alt={el.original_name}
              width="200px"
            />
            <p>{el.original_name}</p>
            <p>Character: {el.character}</p>
          </li>
        );
      })}
    </ul>
  );
}
