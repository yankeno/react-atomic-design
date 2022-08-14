import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Top } from "../pages/Top";
import { Users } from "../pages/Users";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
