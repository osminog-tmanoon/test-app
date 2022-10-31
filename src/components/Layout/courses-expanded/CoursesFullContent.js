import React, { useReducer } from "react";
import coursesContent from "../../../courses-content.json";
import Arrow from "../../SVG/Arrow";
import GallaryCard from "../../UI/GallaryCard";
import classes from "./CoursesFullContent.module.css";
import CoursesFullGallary from "./CoursesFullGallary";
import { useHistory, useRouteMatch } from "react-router-dom";

const CoursesFullContent = (props) => {
  const history = useHistory();
  const { path, url } = useRouteMatch();

  const newUrl = Array(...url)
    .filter((letter) => letter !== "/")
    .join("");
  const content = coursesContent[newUrl] || false;

  const liElements =
    content &&
    content.aboutRole.map((item) => <li key={item.id}>{item.text}</li>);

  const exitModalClickHandler = () => {
    props.modalToFalse();
    history.push("/");
  };

  return (
    <article className={classes["article-container"]}>
      {content && (
        <>
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
          <CoursesFullGallary selecetedCourse={newUrl}/>
        </>
      )}
      <span
        className={classes["close-btn"]}
        onClick={exitModalClickHandler}
      ></span>
      {!content && (
        <>
          <h1 className="cartTitle">
            מצטערים, לא הצלחנו למצוא את מה שאתם מחפשים.
          </h1>
          {/* <h3 className="cartTitle">אבל הנה שיר  שיררגיע אתכם: </h3>
          <iframe
            className={classes["article-image"]}
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            loading="lazy"
          ></iframe>
          <div></div> */}
        </>
      )}
    </article>
  );
};

export default CoursesFullContent;
