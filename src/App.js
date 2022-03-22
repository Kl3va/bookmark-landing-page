import React from "react";
import { download, features } from "./data";

//Components
import Features from "./Components/Features";
import Header from "./Components/Header";
import Download from "./Components/Download";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Features {...features} />
        <Download {...download} />
      </main>
    </>
  );
}

export default App;
