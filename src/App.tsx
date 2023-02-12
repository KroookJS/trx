import { Route, Routes } from "react-router-dom";
import Categories from "./pages/categories";
import FullPage from "./pages/full";
import Home from "./pages/Home";
import "./styles/Home.module.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/full" element={<FullPage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
