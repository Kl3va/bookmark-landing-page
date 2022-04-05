import React from "react";
import {
  download,
  faqData,
  features,
  formData,
  footerData,
  sidebarData,
} from "./data";

//Components
import Features from "./Components/Features";
import Header from "./Components/Header";
import Download from "./Components/Download";
import Faq from "./Components/Faq";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";

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
      <Sidebar {...sidebarData} />
      <Footer {...footerData} />
    </>
  );
}

export default App;
