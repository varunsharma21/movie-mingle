import { useCallback, useEffect, useState } from "react";
import styles from "./App.module.css";
import MovieList from "./components/MovieList.js/MovieList";
import MovieCard from "./components/MovieCard/MovieCard";
import LandingPage from "./LandingPage";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=791e009c3fc4aecdfacd1d2021b4f9a7"
      );

      if (!response.ok) {
        throw Error("Something went wrong :/");
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          adult: movie.adult,
          rating: movie.vote_average,
          poster: movie.poster_path,
          backdrop: movie.backdrop_path,
        };
      });

      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <h2>No movies to show.</h2>;

  if (movies.length > 0) {
    // content = <MovieCard />;
    // content = <MovieList movies={movies} />;
    content = <LandingPage movies={movies} />;
  }

  if (error) {
    content = <h2>{error}</h2>;
  }

  if (isLoading) {
    content = <h2>Loading...</h2>;
  }

  return <div className={styles.App}>{content}</div>;
}

export default App;
