import { useEffect, useState } from "react";
import { movieBaseUrl, image_base_url } from "../Constants";
import requests from "../requests";
import useFetch from "../useFetch";
import "./Banner.css";
const Banner = () => {
  const [movie, setMovie] = useState({});

  const url = movieBaseUrl + requests[0].url;

  const MovieData = useFetch(url);
  const backgroundImage = `${image_base_url}${movie?.poster_path}`;

  useEffect(() => {
    // on Mount of this component, it should show a random movie out of all the movies fetched from  tmdb NETFLIX ORIGINALS api
    const intervalId = setInterval(() => {
      setMovie(
        MovieData?.results?.at(
          Math.floor(Math.random() * MovieData?.results?.length)
        )
      );
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, [MovieData]);

  console.log(Math.floor(Math.random() * MovieData?.results?.length));
  const getDescription = (overview) => {
    return overview?.length > 100
      ? overview.slice(0, overview.length) + "..."
      : overview;
  };
  return (
    <>
      <header
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
        className={"banner"}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My list</button>
          </div>
          <h1 className="banner_description">
            {getDescription(movie?.overview)}
          </h1>
        </div>
      </header>
    </>
  );
};

export default Banner;
