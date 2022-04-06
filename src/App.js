import React from "react";
import {
  faqData,
  features,
  formData,
  footerData,
  sidebarData,
  download,
} from "./data";

//Components
import Features from "./Components/Features";
import Header from "./Components/Header";
import Download from "./Components/Download";
import Faq from "./Components/Faq";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Background from "./Components/Background";

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
      <Background />
      <Footer {...footerData} />
    </>
  );
}

export default App;
