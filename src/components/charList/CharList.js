import { Component } from "react";
import PropTypes from "prop-types";
import "./charList.scss";
import Spinner from "../spiner/Spinner";
import ErrorMessage from "../errorMessage/Error";
import MarvelService from "../../services/MarvelService";

class CharList extends Component {
  constructor(props) {
    super(props);
  }
  marvelAllService = new MarvelService();

  state = {
    charList: [],
    loading: true,
    error: false,
    newItemLoading: false,
    offset: 210,
    charEndet: false,
  };

  componentDidMount() {
    this.onReques();
  }

  onReques = (offset) => {
    this.onCharListLoading();
    this.marvelAllService
      .getAllCharacters(offset)
      .then(this.onCharListLoaded)
      .catch(this.onError);
  };

  onCharListLoading = () => {
    this.setState({
      newItemLoading: true,
    });
  };

  updateCharAll = () => {
    this.marvelAllService
      .getAllCharacters()
      .then(this.onCharListLoaded)
      .catch(this.onError);
  };
  onCharListLoaded = (newCharList) => {
    let endet = false;
    if (newCharList.length < 9) {
      endet = true;
    }

    this.setState(({ offset, charList }) => ({
      charList: [...charList, ...newCharList],
      loading: false,
      newItemLoading: false,
      offset: offset + 9,
      charEndet: endet,
    }));
  };
  onError = () => {
    this.setState({ loading: false, error: true });
  };

  renderItems(arr) {
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
          key={item.id}
          onClick={() => this.props.onCharSelected(item.id)}
        >
          <img src={item.thumbnail} alt={item.name} style={imgStyle} />
          <div className="char__name">{item.name}</div>
        </li>
      );
    });
    // А эта конструкция вынесена для центровки спиннера/ошибки
    return <ul className="char__grid">{items}</ul>;
  }

  render() {
    const { charList, loading, error, offset, newItemLoading, charEndet } =
      this.state;
    const items = this.renderItems(charList);
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
          onClick={() => this.onReques(offset)}
        >
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

CharList.propTypes = {
  onCharSelected: PropTypes.func.isRequired,
};

export default CharList;
