import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login"
import Master from "../pages/master";
import Detail from "../pages/detail";

function App() {
  const [count, setCount] = useState(0);

  return <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Login/>}/>
      <Route path="/holidays/master" element = {<Master/>}/>
      <Route path="/holidays/:id" element = {<Detail/>}/>
    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
