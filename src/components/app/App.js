import { lazy, Suspense } from "react";
import AppHeader from "../appHeader/AppHeader";
import { Route, Routes } from "react-router-dom";
import { ComicsPage, MainPage, SingleComic } from "../pagesRoutes";
import Spinner from "../spiner/Spinner";

const Page404 = lazy(() => import("../pagesRoutes/Page404"));

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="Comics" element={<ComicsPage />} />
            <Route path="/Comics/:comicId" element={<SingleComic />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
