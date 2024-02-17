import { Component } from "react";
import "./randomChar.scss";
import ErrorMessage from "../errorMessage/Error";
import MarvelService from "../../services/MarvelService";
import mjolnir from "../../resources/img/mjolnir.png";
import Spinner from "../spiner/Spinner";

class RandomChar extends Component {
  componentDidMount() {
    this.updateChar();
  }
  state = {
    thumbnail: "",
    description: "",
    char: {},
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  onCharLoaded = (char) => {
    this.setState({ char, loading: false });
  };
  onError = () => {
    this.setState({ loading: false, error: true });
  };
  onCharLoading = () => {
    this.setState({
      loading: true,
    });
  };

  updateChar = () => {
    this.onCharLoading();
    const idRandom = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

    this.marvelService
      .getCharacter(idRandom)
      .then(this.onCharLoaded)
      .catch(this.onError);
  };

  render() {
    const { char, loading, error } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorMessage /> : null;
    const content = !(loading || error) ? <View char={char} /> : null;

    return (
      <div className="randomchar">
        {spinner}
        {errorMessage}
        {content}
        <div className="randomchar__static">
          <p className="randomchar__title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomchar__title">Or choose another one</p>
          <button onClick={this.updateChar} className="button button__main">
            <div className="inner">try it</div>
          </button>
          <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
        </div>
      </div>
    );
  }
}

const View = ({ char }) => {
  const { thumbnail, name, description, homepage, wiki } = char;
  const apiImg =
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";

  const classRandomcharImg = "randomchar__img";
  const classNoRandomcharImg = "randomchar__noimg";
  const classRandomcharImgs =
    thumbnail === apiImg ? classNoRandomcharImg : classRandomcharImg;
  const notDescription = "Нет данных";
  const randomcharDescription =
    description === "" ? notDescription : description;

  return (
    <div className="randomchar__block">
      <img
        src={thumbnail}
        alt="Random character"
        className={classRandomcharImgs}
      />
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">{randomcharDescription}</p>
        <div className="randomchar__btns">
          <a href={homepage} className="button button__main">
            <div className="inner">homepage</div>
          </a>
          <a href={wiki} className="button button__secondary">
            <div className="inner">wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RandomChar;
