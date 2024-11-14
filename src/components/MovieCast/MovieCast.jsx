import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { getCastList } from "../../js/requestsAPI";
import Cast from "../Cast/Cast";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const MovieCast = () => {
  const movieId = useParams();

  const [loader, setLoader] = useState(false);
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        setLoader(true);
        const movieCredits = await getCastList(movieId.movieId);
        setCastList(movieCredits.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    handleSubmit();
  }, [movieId]);

  return (
    <>
      <Loader status={loader} />
      {castList.length > 0 ? <Cast castList={castList} /> : <NotFoundPage />}
    </>
  );
};
export default MovieCast;
