import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Cards = ({ laptop }) => {
  const [film, setFilm] = useState([]);
  const baseUrl = "https://api.themoviedb.org/3";
  const apikey = "?api_key=ef201ee9e2e0701711e3174b458e1cfb";
  const url = `${baseUrl}/movie/top_rated${apikey}&language=en-US&page=1`;

  const fetchMovies = () => {
    const options = {
      method: "GET",
      url,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTgyNjk2N2M4NGEyYWMyNmYzZWQ0YzcyZjUwZTk4MyIsInN1YiI6IjYxMDkyZGY2YzYxM2NlMDAyODQ1YzllMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IJ1R7IJ5BWHdbkPYDAnuAqKLDKBsgOcTtxTTIhRj6fU",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setFilm(response.data.results.slice(0, 10));
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchMovies();
    console.log(film)
  }, []);

  useEffect(() => {
    const cond = (laptop?.length || 0 ) == 0 ;
    if (cond){
      fetchMovies();
    }
    setFilm(laptop);
  }, [laptop]);

  return film.length == 0 ? (
    <h1 className="nomovie"> Movie not found</h1>
  ) : (
    <div className="main">
      <h1>Top 10 Rated Movies:</h1>
      <ul className="cards_container">
        {film.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default Cards;