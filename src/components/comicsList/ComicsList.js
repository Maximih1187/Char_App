import { useEffect, useState } from "react";
import "./comicsList.scss";
import Spinner from "../spiner/Spinner";
import { NavLink } from "react-router-dom";

import useComicsService from "../../services/ComicsService";
import ErrorMessage from "../errorMessage/Error";

const ComicsList = () => {
  const { loading, error, getAllComics } = useComicsService();
  const [charList, setCharList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [charEndet, setCharEndet] = useState(false);
  const [offset, setOffset] = useState(false);

  useEffect(() => {
    onReques(offset, true);
    console.log(offset);
  }, []);

  const onReques = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    getAllComics(offset).then(onCharListLoaded);
  };

  const onCharListLoaded = (newCharList) => {
    let endet = false;
    if (newCharList.length < 8) {
      endet = true;
    }

    setCharList((charList) => [...charList, ...newCharList]);
    setNewItemLoading(false);
    setOffset(offset + 8);
    setCharEndet(endet);
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
        <li className="comics__item" key={i}>
          <NavLink end to="SingleComic">
            <a href="#">
              <img
                src={item.thumbnail}
                alt="ultimate war"
                className="comics__item-img"
              />
              <div className="comics__item-name">{item.name}</div>
              <div className="comics__item-price">{item.price}</div>
            </a>
          </NavLink>
        </li>
      );
    });
    // А эта конструкция вынесена для центровки спиннера/ошибки
    return <ul className="comics__grid">{items}</ul>;
  }
  const items = renderItems(charList);
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div className="comics__list">
      {items}
      {spinner}
      {errorMessage}
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

export default ComicsList;
