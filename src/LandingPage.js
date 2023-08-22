import React from "react";
import Header from "./components/Header/Header";
import MovieCard from "./components/MovieCard/MovieCard";
import MovieList from "./components/MovieList.js/MovieList";

function LandingPage(props) {
  return (
    <div className="container">
      <Header />
      <MovieList movies={props.movies} />
    </div>
  );
}

export default LandingPage;
