import React from "react";
import styles from "./MovieList.module.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = (props) => {
  return (
    <div className={styles["movie-list"]}>
      {props.movies.map((movie) => (
        <MovieCard title={movie.title} poster={movie.poster} />
      ))}
    </div>
  );
};

export default MovieList;

//  <div key={movie.id}>
//           <img
//             // This way is used for a specific image.
//             // src="https://image.tmdb.org/t/p/w185/6oH378KUfCEitzJkm07r97L0RsZ.jpg"

//             // When using template literals(back ticks) we need to enclose image url in {}.
//             // We used back ticks because we need different image in each card.
//             src={`https://image.tmdb.org/t/p/w185/${movie.backdrop}`}
//             alt={movie.title}
//           />
//           <h2>
//             {movie.title} {movie.rating}
//           </h2>
//           {/* <p>{movie.rating}</p> */}
//           <br />
//           <br />
//         </div>
