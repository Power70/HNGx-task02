
// import React from "react";
// import blacklogo from "../Components/Images/blacklogo.svg";
// import home from "../Components/Images/Home.svg";
// import movieProjector from "../Components/Images/Movie Projector.svg";
// import tvshow from "../Components/Images/TV Show.svg";
// import calender from "../Components/Images/Calendar.svg";
// const Details = () => {
//     return (
//         <div className="details">
//             <div className="details1">
//                 <div className="details1-icon">
//                     <div className="icon-text">
//                         <img src={blacklogo} alt="blacklogo" className="details1-item" />
//                     </div>
//                     <div className="icon-text">
//                         <img src={home} alt="home" className="details1-item" />
//                         <p className="name">Home</p>
//                     </div>
//                     <div className="icon-text">
//                         <img src={movieProjector} alt="movieProtector" className="details1-item" />
//                         <p className="name">Movies</p>
//                     </div>
//                     <div className="icon-text">
//                         <img src={tvshow} alt="tvshow" className="details1-item" />
//                         <p className="name">TV Series</p>
//                     </div>
//                     <div className="icon-text">
//                         <img src={calender} alt="calender" className="details1-item" />
//                         <p className="name">Calender</p>
//                     </div>
//                 </div>
//                 <div className="details1-text">
//                     <p className="text1">Play movie quizes and earn free tickets</p>
//                     <p className="text2">50k people are playing now</p>
//                     <button className="startplaying">Start playing</button>
//                 </div>
//             </div>
//             <div className="details2"></div>
//         </div>
//     )
// }
// export default Details;


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
        <h2><strong>Title :</strong> {moviesDetails.title}</h2>
        <p><strong>release date :</strong>{Date.parse(moviesDetails.release_date)}</p>
        <p><strong>runtime : </strong> {moviesDetails.runtime}</p>
        <p><strong>overview : </strong>{moviesDetails.overview}</p>
      </div>
    </div>
    </div>
    
  );
}

export default Details;