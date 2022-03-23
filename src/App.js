import React from "react";
import { download, faqData, features } from "./data";

//Components
import Features from "./Components/Features";
import Header from "./Components/Header";
import Download from "./Components/Download";
import Faq from "./Components/Faq";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Features {...features} />
        <Download {...download} />
        <Faq {...faqData} />
      </main>
    </>
  );
}

export default App;
