import React from "react";
import coursesContent from "../../../courses-content.json";
import Arrow from "../../SVG/Arrow";
import GallaryCard from "../../UI/GallaryCard";
import classes from "./CoursesFullContent.module.css";
import CoursesFullGallary from "./CoursesFullGallary";
import { useHistory } from "react-router-dom";

const CoursesFullContent = (props) => {
  const history = useHistory();
  const content = coursesContent.qa;

  const liElements = content.aboutRole.map((text) => <li>{text}</li>);

  const exitModalClickHandler = () => {
    props.modalToFalse();
    history.push("/");
  };

  return (
    <article className={classes["article-container"]}>
      <span
        className={classes["close-btn"]}
        onClick={exitModalClickHandler}
      ></span>
      <iframe
        className={classes["article-image"]}
        src={content.videoUrl}
        loading="lazy"
      ></iframe>
      <article>
        <div className={classes["brief"]}>
          <h3 className="sectionTitle">{content.title}</h3>
          <p className="text">{content.brief}</p>
        </div>
        <ul className={`text ${classes["about-role"]}`}>{liElements}</ul>
      </article>
      <CoursesFullGallary />
    </article>
  );
};

export default CoursesFullContent;
