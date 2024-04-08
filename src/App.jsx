import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Page404 from "./pages/page404/Page404";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Page404 />} /> */
      </Routes>
    </BrowserRouter>
  );
};

export default App;
