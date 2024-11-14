import css from "./Reviews.module.css";

const Reviews = ({ reviewsList }) => {
  return (
    <>
      {
        <ul className={css.list}>
          {reviewsList.map(({ id, author, content, updated_at }) => (
            <li key={id} className={css.item}>
              <div id={id} className={css.container}>
                <div className={css.box}>
                  <h4 className={css.title}>{author}</h4>
                  <p className={css.text}>
                    {
                      new Date(new Date(updated_at).valueOf())
                        .toISOString()
                        .split("T")[0]
                    }
                  </p>
                </div>

                <p className={css.text}>{content}</p>
              </div>
            </li>
          ))}
        </ul>
      }
    </>
  );
};
export default Reviews;
