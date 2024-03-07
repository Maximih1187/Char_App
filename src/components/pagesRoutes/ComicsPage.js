import ComicsList from "../comicsList/ComicsList";
import decoration from "../../resources/img/vision.png";
//import { useState } from "react";
// import SingleComic from "../singleComic/SingleComic";
import AppBanner from "../appBanner/AppBanner";
//import { Route, Routes } from "react-router-dom";

const ComicsPage = () => {
  return (
    <>
      <AppBanner />
      <ComicsList />
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  );
};

export default ComicsPage;
