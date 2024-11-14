import { useEffect, useRef, useState } from "react";
import { getMoviesById } from "../../js/requestsAPI";
import { Link, useLocation, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import MovieCard from "../../components/MovieCard/MovieCard";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const movieId = useParams();

  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const location = useLocation();

  const backLinkRef = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoader(true);
        const data = await getMoviesById(movieId.movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    fetchMovie();
  }, [movieId]);
  const isMovie = Boolean(movie);

  return (
    <>
      <Loader status={loader} />

      {!loader && (
        <Link to={backLinkRef.current} className={css.button}>
          Go Back
        </Link>
      )}
      {isMovie && <MovieCard movie={movie} />}
    </>
  );
};
export default MovieDetailsPage;
