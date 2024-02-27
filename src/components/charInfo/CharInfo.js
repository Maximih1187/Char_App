import { useState, useEffect, useCallback } from "react";
import "./charInfo.scss";
import PropTypes from "prop-types";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spiner/Spinner";
import ErrorMessage from "../errorMessage/Error";
import Skeleton from "../skeleton/Skeleton";

const CharInfo = (props) => {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const marvelAllService = new MarvelService();

  useEffect(() => {
    updateChar();
  }, [props]);

  // useEffect(
  //   (prevProps) => {
  //     if (props.charId !== prevProps.charId) {
  //       updateChar();
  //     }
  //   },
  //   [props]
  // );

  const updateChar = useCallback(() => {
    const { charId } = props;
    console.log(props);
    if (!charId) {
      return;
    }
    onCharLoading();

    marvelAllService.getCharacter(charId).then(onCharLoaded).catch(onError);
  }, [props]);

  const onCharLoaded = (char) => {
    setChar(char);
    setLoading(false);
  };

  const onCharLoading = () => {
    setLoading(true);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const skeleton = char || loading || error ? null : <Skeleton />;
  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <div className="char__info">
      {skeleton}
      {spinner}
      {errorMessage}
      {content}
    </div>
  );
};

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;
  let imgStyle = { objectFit: "cover" };
  if (
    thumbnail ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
  ) {
    imgStyle = { objectFit: "unset" };
  }

  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt={name} style={imgStyle} />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{description}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comics.length > 0 ? null : "Данных не нашли (("}
        {comics.map((item, i) => {
          if (i > 9)
            return (
              <li className="char__comics-item" key={i}>
                {item.name}
              </li>
            );
        })}
      </ul>
    </>
  );
};

CharInfo.propTypes = {
  charId: PropTypes.number,
};

export default CharInfo;
