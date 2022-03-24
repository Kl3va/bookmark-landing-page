import React from "react";
import { download, faqData, features, formData } from "./data";

//Components
import Features from "./Components/Features";
import Header from "./Components/Header";
import Download from "./Components/Download";
import Faq from "./Components/Faq";
import Form from "./Components/Form";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Features {...features} />
        <Download {...download} />
        <Faq {...faqData} />
        <Form {...formData} />
      </main>
    </>
  );
}

export default App;
