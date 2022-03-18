import React from "react";
import Features from "./Components/Features";
import Header from "./Components/Header";
import { features } from "./data";

function App() {
  return (
    <>
      <Header />
      <Features {...features} />
    </>
  );
}

export default App;
