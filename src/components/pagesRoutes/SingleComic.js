import "./singleComic.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useComicsService from "../../services/ComicsService";
import Spinner from "../spiner/Spinner";
import ErrorMessage from "../errorMessage/Error";
import AppBanner from "../appBanner/AppBanner";

const SingleComic = () => {
  const [comic, setComic] = useState(null);

  const { comicId } = useParams();

  const { loading, error, getComic, clearError } = useComicsService();

  useEffect(() => {
    updateComic();
  }, [comicId]);

  const updateComic = () => {
    clearError();
    getComic(comicId).then(onComicLoaded);
  };

  const onComicLoaded = (comic) => {
    setComic(comic);
  };

  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const content = !(loading || error || !comic) ? <View comic={comic} /> : null;

  return (
    <>
      <AppBanner />
      {spinner}
      {errorMessage}
      {content}
    </>
  );
};

const View = ({ comic }) => {
  const { title, description, pageCount, thumbnail, language, price } = comic;

  return (
    <>
      <div className="single-comic">
        <img src={thumbnail} alt="x-men" className="single-comic__img" />
        <div className="single-comic__info">
          <h2 className="single-comic__name">{title}</h2>
          <p className="single-comic__descr">{description}</p>
          <p className="single-comic__descr">{pageCount}</p>
          <p className="single-comic__descr">Language: {language}</p>
          <div className="single-comic__price">{price}$</div>
        </div>

        <Link to="/Comics" className="single-comic__back">
          Back to all
        </Link>
      </div>
    </>
  );
};

export default SingleComic;
