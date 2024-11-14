import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { getReviewsList } from "../../js/requestsAPI";
import Reviews from "../Reviews/Reviews";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const MovieReviews = () => {
  const movieId = useParams();

  const [loader, setLoader] = useState(false);
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        setLoader(true);
        const movieReviews = await getReviewsList(movieId.movieId);
        setReviewsList(movieReviews);
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
      {reviewsList > 0 ? (
        <Reviews reviewsList={reviewsList} />
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};
export default MovieReviews;
