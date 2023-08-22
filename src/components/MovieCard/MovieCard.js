import React from "react";
import styles from "./MovieCard.module.css";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
  const { poster, title } = props;

  const showMovieInfoHandler = () => {};

  return (
    <div className={styles["movie-card"]} onClick={showMovieInfoHandler}>
      <img
        src={`https://image.tmdb.org/t/p/w185/${poster}`}
        alt="movie poster"
      />
      <p>{title}</p>
    </div>
  );
};

export default MovieCard;
