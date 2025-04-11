import React from "react";
import Nav from "./component/Nav.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quote from "./component/Quote/Quote.jsx";
import HomePage from "./component/home/HomePage.jsx";
import QuoteData from "./component/Quote/QuoteData.js";

function App() {
  {
    console.log(QuoteData);
  }
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/quote" element={<HomePage />} />
          <Route path="/" element={<Quote QuoteData={QuoteData} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
