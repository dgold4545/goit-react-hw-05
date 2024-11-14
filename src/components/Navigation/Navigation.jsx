import clsx from "clsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <header>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movie
        </NavLink>
      </nav>
    </header>
  );
};
export default Navigation;
