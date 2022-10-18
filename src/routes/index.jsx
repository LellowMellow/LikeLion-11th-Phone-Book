import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./../pages/Landing/index";

// 라우트명은 kebab-case 로 작성합니다

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
