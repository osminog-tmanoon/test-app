import React, { useEffect, useState } from "react";
import Opening from "./components/Layout/Opening";
import content from "./content.json";
import "./App.css";
import SortiesProccess from "./components/Layout/sorties-proccess/SortiesProccess";
import Roles from "./components/Layout/roles/Roles";
import Footer from "./components/Layout/footer/Footer";
import Modal from "./components/UI/Modal";
import CoursesFullContent from "./components/Layout/courses-expanded/CoursesFullContent";
import Info from "./pages/Info";

const App = () => {
  /* hello */
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="App">
      {isModalOpen && (
        <Modal onToggleModal={toggleModal} style={{ top: 0, margin: 0 }}>
          <CoursesFullContent />
        </Modal>
      )}
      <Info isModalOpen={isModalOpen}>
        <Opening content={content} />
        <main className="main-content" role="main">
          <SortiesProccess content={content} />
          <Roles content={content} onToggleModal={toggleModal} />
        </main>
        <Footer content={content} />
      </Info>
    </div>
  );
};

export default App;
