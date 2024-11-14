import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
import Loader from "../Loader/Loader";

const MovieList = ({ movies, statusLoader }) => {
  const location = useLocation();

  return (
    <>
      <Loader status={statusLoader} />
      <ul className={css.list}>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id} className={css.item}>
            <Link state={{ from: location }} to={`/movies/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default MovieList;
