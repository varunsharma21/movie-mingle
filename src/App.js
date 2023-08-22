import { useCallback, useEffect, useState } from "react";
import styles from "./App.module.css";
import MovieList from "./components/MovieList.js/MovieList";
import MovieCard from "./components/MovieCard/MovieCard";
import LandingPage from "./LandingPage";
import { Routes, Route } from "react-router-dom";
import MovieInfoPage from "./components/MovieInfoPage/MovieInfoPage";
import MovieFetcher from "./MovieFetcher";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<MovieFetcher />} />
        <Route path="/description" element={<MovieInfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
