import React from "react";
import coursesContent from "../../../courses-content.json";
import classes from "./CoursesFullContent.module.css";

const CoursesFullContent = () => {
  const content = coursesContent.programming;

  return (
    <article className={classes["article-container"]}>
      <header>
        <button className={classes['back-btn']}></button>
      </header>
      <iframe
        className={classes["article-image"]}
        src={content.videoUrl}
        loading="lazy"
      ></iframe>
    </article>
  );
};

export default CoursesFullContent;
