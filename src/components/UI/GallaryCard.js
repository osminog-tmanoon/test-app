import React, { useEffect } from "react";
import Card from "./Card";
import classes from "./GallaryCard.module.css";

const GallaryCard = (props) => {
  const paragraphArray = Array.from(props.content.text);
  const maxLetters = 137;
  console.log(paragraphArray);

  let newArray = paragraphArray.filter(
    (item, index) => index <= maxLetters - 1
  );

  if (paragraphArray.length > maxLetters - 1) {
    newArray.push("...");
  }

  const newText = newArray.join("");
  console.log(newText);
  return (
    <div>
      <Card className={classes["gallar-card-container"]}>
        <div className={classes["gallary-image"]}></div>
        <h3 className="cartTitle">{props.content.courseName}</h3>
        <div className={classes["text-area"]}>
          <p className="text">{newText}</p>
        </div>
        <svg
          width="43"
          height="21"
          viewBox="0 0 43 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes.icon}
        >
          <path
            d="M1 11H29"
            stroke="#A5BDDA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.30359 10.2971L5.77104 5.64854L10.2385 1"
            stroke="#A5BDDA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.34937 20L1 10.6085"
            stroke="#A5BDDA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35 11H41.5385"
            stroke="#A5BDDA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Card>
    </div>
  );
};

export default GallaryCard;
