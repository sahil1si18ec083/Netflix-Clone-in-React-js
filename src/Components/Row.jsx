import useFetch from "../useFetch";
import { image_base_url } from "../Constants";
import "./Row.css";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const row = useFetch(fetchUrl);

  const handleMovieClick = (movie) => {
    // on click of this popover should open
  };
  return (
    <div className={"row"}>
      <h2>{title} </h2>
      <div className="row_posters">
        {row?.results?.map((movie, id) => (
          <div key={id}>
            <img
              key={id}
              onClick={() => handleMovieClick(movie)}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              // src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}

              src={`${image_base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
