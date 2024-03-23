import "./singleComic.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spiner/Spinner";
import ErrorMessage from "../errorMessage/Error";


const SingleChar = () => {
      const { chartId } = useParams();
      const [char, setChar] = useState(null);



      const { loading, error, getCharacter, clearError } = useMarvelService();

      useEffect(() => {
            updateChar();
      }, [chartId]);

      const updateChar = () => {
            clearError();
            getCharacter(chartId).then(onComicLoaded);
      };

      const onComicLoaded = (char) => {
            setChar(char);

      };


      const spinner = loading ? <Spinner /> : null;
      const errorMessage = error ? <ErrorMessage /> : null;
      const content = !(loading || error || !char) ? <View char={char} /> : null;

      return (
            <>

                  {spinner}
                  {errorMessage}
                  {content}
            </>
      );
};

const View = ({ char }) => {
      const { title, description, pageCount, thumbnail } = char;

      return (
            <>
                  <div className="single-comic">
                        <img src={thumbnail} alt="x-men" className="single-comic__img" />
                        <div className="single-comic__info">
                              <h2 className="single-comic__name">{title}</h2>
                              <p className="single-comic__descr">{description}</p>
                              <p className="single-comic__descr">{pageCount}</p>


                        </div>

                        <Link to="/" className="single-comic__back">
                              Back to all
                        </Link>
                  </div>
            </>
      );
};

export default SingleChar;
