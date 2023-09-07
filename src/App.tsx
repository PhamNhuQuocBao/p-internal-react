import { FC } from "react";
//import stylesheets
import "./App.css";
//import components
import HomePage from "./views/pages/home";
import DetailPage from "./views/pages/detail";
//import custom hooks
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useIdSelected } from "./hooks/useIdSelected";

const App: FC = () => {
  const { idSelected } = useIdSelected();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route
            path={`/detail/product/${idSelected}`}
            element={<DetailPage id={idSelected} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
