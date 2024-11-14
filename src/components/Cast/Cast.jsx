import css from "./Cast.module.css";

const Cast = ({ castList }) => {
  return (
    <>
      <ul className={css.list}>
        {castList.map(({ id, name, popularity, character, profile_path }) => (
          <li key={id} className={css.item}>
            <div className={css.container}>
              <h4>As: {character}</h4>
              <img
                className={css.img}
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
              />
              <p className={css.text}>{name}</p>
              <p className={css.text}>Popularity: {popularity}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cast;
