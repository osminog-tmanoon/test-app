import React, { useEffect, useRef } from "react";
import Card from "./Card";
import classes from "./GallaryCard.module.css";

const GallaryCard = (props) => {
  const cardImage = {
    backgroundImage: `url(${
      process.env.PUBLIC_URL +
      `${
        props.content.courseImage
          ? props.content.courseImage
          : "./placeholderImage-3.svg"
      }`
    })`,
    opacity: props.content.courseImage ? 0.6 : 0.12,
  };

  return (
    <Card className={classes["gallar-card-container"]}>
      <div
        className={classes["gallary-image"]}
        style={cardImage}
        alt="תמונה של המסלול"
      ></div>
      <h3 className={`cartTitle ${classes.h3}`}>{props.content.courseName}</h3>
      <div className={classes["text-area"]}>
        <p className={`text ${classes.text}`}>{props.content.text}</p>
      </div>
      <svg
        width="43"
        height="21"
        viewBox="0 0 43 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${classes.icon} ${classes["cls-1"]}`}
      >
        <path
          d="M1 11H29"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.30359 10.2971L5.77104 5.64854L10.2385 1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.34937 20L1 10.6085"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35 11H41.5385"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Card>
  );
};

export default GallaryCard;
