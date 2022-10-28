import React from "react";
import Opening from "./components/Layout/Opening";
import content from "./content.json";
import "./App.css";
import SortiesProccess from "./components/Layout/sorties-proccess/SortiesProccess";
import Roles from "./components/Layout/roles/Roles";

const App = () => {
  /* hello */
  return (
    <div className="App">
      <Opening content={content} />
      <main>
        <SortiesProccess content={content} />
        <Roles content={content} />
      </main>
    </div>
  );
};

export default App;
