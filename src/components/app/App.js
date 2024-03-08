import AppHeader from "../appHeader/AppHeader";
import { Route, Routes } from "react-router-dom";
import { ComicsPage, MainPage, SingleComic, Page404 } from "../pagesRoutes";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="Comics" element={<ComicsPage />} />
          <Route path="/Comics/:comicId" element={<SingleComic />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
