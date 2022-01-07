import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../services/fetchApi";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId).then((data) => setReviews(data.results));
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We dont have any reviews for this movie</p>;
  }

  return (
    <ul>
      {reviews.map((el) => {
        return (
          <li key={el.id}>
            Author:
            {el.author}
            <p>{el.content}</p>
          </li>
        );
      })}
    </ul>
  );
}
