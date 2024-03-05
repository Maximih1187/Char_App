import AppHeader from "../appHeader/AppHeader";
import MainPage from "../pagesRoutes/MainPage";
import { Route, Routes } from "react-router-dom";
import ComicsPage from "../pagesRoutes/ComicsPage";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="Comics" element={<ComicsPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
