import { useEffect, useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import "./charList.scss";
import Spinner from "../spiner/Spinner";
import ErrorMessage from "../errorMessage/Error";
import useMarvelService from "../../services/MarvelService";

const CharList = (props) => {
  const [charList, setCharList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [charEndet, setCharEndet] = useState(false);
  const [offset, setOffset] = useState(false);

  const { loading, error, getAllCharacters } = useMarvelService();

  useEffect(() => {
    onReques(offset, true);
    console.log(11);
  }, []);

  const onReques = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    getAllCharacters(offset).then(onCharListLoaded);
    console.log("pppp");
  };

  const onCharListLoaded = useCallback((newCharList) => {
    let endet = false;
    if (newCharList.length < 9) {
      endet = true;
    }
    setCharList((charList) => [...charList, ...newCharList]);
    setNewItemLoading(false);
    setOffset(offset + 9);

    setCharEndet(endet);
  }, []);

  const itemRefs = useRef([]);

  const focusOnItem = (i) => {
    itemRefs.current.forEach((item) =>
      item.classList.remove("char__item_selected")
    );
    itemRefs.current[i].classList.add("char__item_selected");
    itemRefs.current[i].focus();
  };

  function renderItems(arr) {
    const items = arr.map((item, i) => {
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
          tabIndex={i}
          ref={(el) => (itemRefs.current[i] = el)}
          key={i}
          onClick={() => {
            props.onCharSelected(item.id);
            focusOnItem(i);
          }}
          onKeyPress={(e) => {
            if (e.key === "" || e.key === "Enter") {
              props.onCharSelected(item.id);
              focusOnItem(i);
            }
          }}
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
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div className="char__list">
      {errorMessage}
      {spinner}
      {items}
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
