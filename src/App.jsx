import React from "react";
import Nav from "./component/Nav.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quote from "./component/Quote.jsx";
import HomePage from "./component/HomePage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
