import React, { useState } from "react";
import Opening from "./components/Layout/Opening";
import content from "./content.json";
import "./App.css";
import SortiesProccess from "./components/Layout/sorties-proccess/SortiesProccess";
import Roles from "./components/Layout/roles/Roles";
import Footer from "./components/Layout/footer/Footer";
import Modal from "./components/UI/Modal";
import CoursesFullContent from "./components/Layout/courses-expanded/CoursesFullContent";
import Info from "./pages/Info";
import { Route } from "react-router-dom";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalToFalse = () => {
    setIsModalOpen(false);
  };

  const modalToTrue = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="App overlay custom">
      <Info isModalOpen={isModalOpen}>
        <Route path="/:courseId">
          <Modal
            modalToFalse={modalToFalse}
            isModalOpen={isModalOpen}
            style={{ marginTop: 90, borderRadius: 20 }}
            modalToTrue={modalToTrue}
          >
            <CoursesFullContent modalToFalse={modalToFalse} />
          </Modal>
        </Route>
        <Route path="/">
          <Opening content={content} />
          <main className="main-content" role="main">
            <SortiesProccess content={content} />
            {content.courses.map((courseContent, index) => (
              <Roles
                key={courseContent.id}
                index={index}
                content={courseContent}
                modalToTrue={modalToTrue}
              />
            ))}
          </main>
          <Footer content={content} />
        </Route>
      </Info>
    </div>
  );
};

export default App;
