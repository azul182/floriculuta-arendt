// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home"
import Produtos from "./pages/produtos"
import Login from "./pages/login"

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/produtos" element={<Produtos/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
