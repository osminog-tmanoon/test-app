import React from "react";
import Opening from "./components/Layout/Opening";
import content from "./content.json";
import "./App.css";
import SortiesProccess from "./components/Layout/sorties-proccess/SortiesProccess";

const App = () => {
  /* hello */
  return (
    <div className="App">
      <Opening content={content} />
      <main>
        <SortiesProccess />
      </main>
    </div>
  );
};

export default App;
