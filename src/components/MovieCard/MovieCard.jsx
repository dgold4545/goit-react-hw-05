import { NavLink, Outlet } from "react-router-dom";
import css from "./MovieCard.module.css";
import { Suspense } from "react";
import clsx from "clsx";

const MovieCard = ({
  movie: {
    backdrop_path,
    original_title,
    genres,
    overview,
    release_date,
    vote_average,
  },
}) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <>
      <div className={css.box}>
        <img
          className={css.images}
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={original_title}
        />
        <div className={css.container}>
          <h1 className={css.title}>
            {original_title}({new Date(release_date).getFullYear()})
          </h1>
          <p className={css.text}>User score: {vote_average}</p>
          <h2 className={css.box_title}>Overview</h2>
          <p className={css.text}>{overview}</p>
          <h2 className={css.box_title}>Genres:</h2>
          <p className={css.text}>
            {genres
              .map((genre) => {
                return genre.name;
              })
              .join(", ")}
          </p>
        </div>
      </div>
      <ul className={css.nav}>
        <li>
          <NavLink to="cast" className={buildLinkClass}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={buildLinkClass}>
            Reviews
          </NavLink>
        </li>
      </ul>

      <Suspense fallback={<div>loading subpage</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieCard;
