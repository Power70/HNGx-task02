import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Details() {
  const [moviesDetails, setMoviesDetails] = useState([]);
  const parameters = useParams();
  const apikey = "?api_key=05826967c84a2ac26f3ed4c72f50e983";

  const fetchMoviesDetails = (movie_id) => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movie_id} ${apikey}`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTgyNjk2N2M4NGEyYWMyNmYzZWQ0YzcyZjUwZTk4MyIsInN1YiI6IjYxMDkyZGY2YzYxM2NlMDAyODQ1YzllMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IJ1R7IJ5BWHdbkPYDAnuAqKLDKBsgOcTtxTTIhRj6fU",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMoviesDetails(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    console.log(parameters);
    fetchMoviesDetails(parameters.id);
  }, [parameters.id]);

  const date = new Date(moviesDetails.release_date);

  return (
    <div className="details_container">
      <div key={moviesDetails.id} className="details-card">
        <img
          className="card_image"
          data-testid="movie-poster"
          src={"http://image.tmdb.org/t/p/w500/" + moviesDetails.poster_path}
          alt="things"
        />
        <div to={moviesDetails.id}>
          <h2 data-testid = "movie-title">
            <strong>Title :</strong> {moviesDetails.title}
          </h2>
          <p data-testid = "movie-release-date">
            <strong>release date :</strong>
            {date.toUTCString()}
          </p>
          <p data-testid = "movie-runtime">
            <strong>runtime : </strong> {moviesDetails.runtime}
          </p>
          <p data-testid = "movie-overview">
            <strong>overview : </strong>
            {moviesDetails.overview}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;