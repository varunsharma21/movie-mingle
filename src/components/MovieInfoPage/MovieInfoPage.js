import React from "react";
import styles from "./MovieInfoPage.module.css";
import { useLocation } from "react-router-dom";

const MovieInfoPage = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div>
      <h3>
        {data.title} {data.rating}
      </h3>
    </div>
  );
};

export default MovieInfoPage;
