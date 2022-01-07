import "./App.css";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/DefaultPages/Loader";
import Navigation from "./components/DefaultPages/Navigation";
import { Container } from "./styled/common/Container.styled";

const HomePage = lazy(() => import("./components/DefaultPages/HomePage"));
const NotFoundPage = lazy(() =>
  import("./components/DefaultPages/NotFoundPage")
);
const Movies = lazy(() => import("./components/SearchMovies/Movies"));
const MovieDetailsPage = lazy(() =>
  import("./components/MovieDetailsPage/MovieDetailsPage")
);
const Cast = lazy(() => import("./components/MovieDetailsPage/Cast"));
const Reviews = lazy(() => import("./components/MovieDetailsPage/Reviews"));

function App() {
  return (
    <>
      <Navigation />
      <Toaster />
      <main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies/" element={<Movies />} />
              <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Container>
      </main>
    </>
  );
}

export default App;
