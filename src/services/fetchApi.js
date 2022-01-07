const BASE_URL = "https://api.themoviedb.org/3";
const apiKey = "772142c0282e327b3dd3decd2c93164e";

export async function fetchTrendMovies() {
  const response = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${apiKey}&language=en-US&page=1`
  );
  const data = await response.json();
  return data;
}

export async function fetchSearchMovies(currentQuery) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${apiKey}&language=en-US&page=1&query=${currentQuery}`
  );
  const data = await response.json();
  return data;
}

export async function fetchCast(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
  );
  const data = await response.json();
  return data;
}

export async function fetchReviews(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`
  );
  const data = await response.json();
  return data;
}
