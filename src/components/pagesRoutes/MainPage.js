import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import CharSearchForm from "../charSearchForm/CharSearchForm";
import ErrorBoundary from "../eroorBoundary/ErrorBoundary";
import decoration from "../../resources/img/vision.png";
import ProductCard from "../productCard/ProductCard";
import InputUsers from "../inputUsers/InputUsers";
import { useState } from "react";


const MainPage = () => {
  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id);
  };
  return (
    <>
      <RandomChar />
      <div className="char__content">
        <CharList onCharSelected={onCharSelected} />
        <div>
          <ErrorBoundary>
            <CharInfo charId={selectedChar} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharSearchForm />
          </ErrorBoundary>
        </div>
        <ProductCard />


      </div>
      <InputUsers />

      <img className="bg-decoration" src={decoration} alt="vision" />

    </>
  );
};

export default MainPage;
