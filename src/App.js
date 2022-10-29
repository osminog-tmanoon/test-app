import React from "react";
import Opening from "./components/Layout/Opening";
import content from "./content.json";
import "./App.css";
import SortiesProccess from "./components/Layout/sorties-proccess/SortiesProccess";
import Roles from "./components/Layout/roles/Roles";
import Footer from "./components/Layout/footer/Footer";

const App = () => {
  /* hello */
  return (
    <div className="App">
      <Opening content={content} />
      <main className="main-content" role="main">
        <SortiesProccess content={content} />
        <Roles content={content} />
      </main>
      <Footer content={content} />
    </div>
  );
};

export default App;
