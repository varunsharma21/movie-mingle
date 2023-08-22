import React from "react";
import styles from "./MovieCard.module.css";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
  const navigate = useNavigate();

  const { id, title, poster, adult, rating, backdrop, overview } = props;
  const data = {
    id: id,
    title: title,
    poster: poster,
    adult: adult,
    rating: rating,
    backdrop: backdrop,
    overview: overview,
  };

  const showMovieInfoHandler = () => {
    navigate("/description", { state: data });
  };

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
