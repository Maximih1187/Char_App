import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./charList.scss";
import Spinner from "../spiner/Spinner";
import ErrorMessage from "../errorMessage/Error";
import MarvelService from "../../services/MarvelService";

const CharList = (props) => {
  const [charList, setCharList] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [charEndet, setCharEndet] = useState(false);
  const [offset, setOffset] = useState(false);

  const marvelAllService = new MarvelService();

  useEffect(() => {
    onReques();
  }, []);

  const onReques = (offset) => {
    onCharListLoading();
    marvelAllService
      .getAllCharacters(offset)
      .then(onCharListLoaded)
      .catch(onError);
  };

  const onCharListLoading = () => {
    setNewItemLoading(true);
  };

  /*   const updateCharAll = () => {
    marvelAllService.getAllCharacters().then(onCharListLoaded).catch(onError);
  }; */
  const onCharListLoaded = (newCharList) => {
    let endet = false;
    if (newCharList.length < 9) {
      endet = true;
    }

    setCharList((charList) => [...charList, ...newCharList]);
    setloading(false);
    setNewItemLoading(false);
    setOffset((offset) => offset + 1);
    setCharEndet(endet);
  };

  const onError = () => {
    setloading(false);
    setError(true);
  };

  const itemRefs = useRef([]);

  const focusOnItem = (id) => {
    itemRefs.current.forEach((item) =>
      item.classlist.remove("char__item_selected")
    );
    itemRefs.current[id].classlist.add("char__item_selected");
    itemRefs.current[id].focus();
  };

  function renderItems(arr) {
    const items = arr.map((item) => {
      let imgStyle = { objectFit: "cover" };
      if (
        item.thumbnail ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ) {
        imgStyle = { objectFit: "unset" };
      }

      return (
        <li
          className="char__item"
          tabIndex={0}
          //ref={(el) => (itemRefs.current[i] = el)}
          key={item.id}
          onClick={() => {
            props.onCharSelected(item.id);
            //focusOnItem(id);
          }}
          // onKeyPress={(e) => {
          //   if (e.key === "" || e.key === "Enter") {
          //     props.onCharSelected(item.id);
          //     focusOnItem(i);
          //   }
          // }}
        >
          <img src={item.thumbnail} alt={item.name} style={imgStyle} />
          <div className="char__name">{item.name}</div>
        </li>
      );
    });
    // А эта конструкция вынесена для центровки спиннера/ошибки
    return <ul className="char__grid">{items}</ul>;
  }

  const items = renderItems(charList);
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error) ? items : null;

  return (
    <div className="char__list">
      {errorMessage}
      {spinner}
      {content}
      <button
        className="button button__main button__long"
        disabled={newItemLoading}
        style={{ display: charEndet ? "none" : "block" }}
        onClick={() => onReques(offset)}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

CharList.propTypes = {
  onCharSelected: PropTypes.func.isRequired,
};

export default CharList;
