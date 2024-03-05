import AppHeader from "../appHeader/AppHeader";
import MainPage from "../pagesRoutes/MainPage";
import { Route, Routes } from "react-router-dom";
import ComicsPage from "../pagesRoutes/ComicsPage";
import AppBanner from "../appBanner/AppBanner";
import SingleComic from "../singleComic/SingleComic";

const App = () => {
  return (
    <div className="app">
      <AppBanner />
      <AppHeader />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="Comics" element={<ComicsPage />} />
          <Route path="Comics/SingleComic" element={<SingleComic />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
