import React from "react";
import { useState } from "react";
import moon from "./Images/ellipse.svg";
import imdb from "./Images/imdb.png";
import tomato from "./Images/fruit.png";
import { Link } from "react-router-dom";

const Card = (prop) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!isFavorite) {
      favorites.push(prop.movie);
    } else {
      const index = favorites.findIndex((movie) => movie.id === prop.movie.id);
      if (index !== -1) {
        favorites.splice(index, 1);
      }
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <Link to={`/movies/${prop.movie.id}`} >
    <div className="card" data-testid="movie-card">
      <div className="first">
        <div className="fav">
          <img className="card_moon" src={moon} alt="moon" />
          <svg
            className={`card_moon ${isFavorite ? "favorite" : ""}`}
            onClick={handleFavoriteClick}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill= "none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Heart">
              <path
                id="Icon"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
                fill= {`${isFavorite ? "#FFFF00" : "#D1D5DB"}`}
              />
            </g>
          </svg>
        </div>
        <img
          className="card_image"
          data-testid="movie-poster"
          src={"http://image.tmdb.org/t/p/w500/" + prop.movie.poster_path}
          alt="things"
        />
      </div>
      <div className="card_items">
        <p className="time" data-testid="movie-release-date">
          {prop.movie.release_date}
        </p>
        <p className="title" data-testid="movie-title">
          {prop.movie.title}
        </p>
        <div className="rating">
          <div className="left">
            <img src={imdb} alt="imdb" />
            <p>{prop.movie.vote_average}</p>
          </div>
          <div className="right">
            <img src={tomato} alt="tomato" />
            <p>90%</p>
          </div>
        </div>
        <p className="category">Category</p>
      </div>
    </div>
    </Link>
  );
};

export default Card;