import React, { useEffect, useState } from "react";
import Opening from "./components/Layout/Opening";
import content from "./content.json";
import "./App.css";
import SortiesProccess from "./components/Layout/sorties-proccess/SortiesProccess";
import Roles from "./components/Layout/roles/Roles";
import Footer from "./components/Layout/footer/Footer";
import Modal from "./components/UI/Modal";
import CoursesFullContent from "./components/Layout/courses-expanded/CoursesFullContent";

const App = () => {
  /* hello */
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isModalOpen) {
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "visible";
        
      }
      return;
    }
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  }, [isModalOpen]);

  return (
    <div className="App" style={{ overflowY: isModalOpen && "hidden" }}>
      {isModalOpen && (
        <Modal onToggleModal={toggleModal} style={{ top: 0, margin: 0 }}>
          <CoursesFullContent />
        </Modal>
      )}
      <Opening content={content} />
      <main className="main-content" role="main">
        <SortiesProccess content={content} />
        <Roles content={content} onToggleModal={toggleModal} />
      </main>
      <Footer content={content} />
    </div>
  );
};

export default App;
