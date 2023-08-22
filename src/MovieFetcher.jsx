import { useCallback, useEffect, useState } from "react";
import MovieList from "./components/MovieList.js/MovieList";
import MovieCard from "./components/MovieCard/MovieCard";
import LandingPage from "./LandingPage";

function MovieFetcher() {
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
          poster: movie.poster_path,
          adult: movie.adult,
          rating: movie.vote_average,
          backdrop: movie.backdrop_path,
          overview: movie.overview,
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
    content = <LandingPage movies={movies} />;
  }

  if (error) {
    content = <h2>{error}</h2>;
  }

  if (isLoading) {
    content = <h2>Loading...</h2>;
  }

  return <div>{content}</div>;
}

export default MovieFetcher;
