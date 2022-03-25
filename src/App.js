import React from "react";
import { download, faqData, features, formData, footerData } from "./data";

//Components
import Features from "./Components/Features";
import Header from "./Components/Header";
import Download from "./Components/Download";
import Faq from "./Components/Faq";
import Form from "./Components/Form";
import Footer from "./Components/Footer";

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
      <Footer {...footerData} />
    </>
  );
}

export default App;
