import AppHeader from "../appHeader/AppHeader";
import { Route, Routes } from "react-router-dom";
import { ComicsPage, MainPage, SingleComic } from "../pagesRoutes";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="Comics" element={<ComicsPage />} />
          <Route path="/SingleComic" element={<SingleComic />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
