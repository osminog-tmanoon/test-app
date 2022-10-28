import React from "react";
import classes from "./Opening.module.css";

const Opening = (props) => {
  const { title, subTitle, imgUrl, logoUrl } = props.content[0];
  return (
    <div className={classes["opening-container"]}>
      <header className={classes.header}>
        <div className={classes.logo}></div>
        <h1 className={`${"title"} ${classes['opening-title']}`}>{title}</h1>
        <h3 className="subTitle">{subTitle}</h3>
      </header>
      <figure className={classes.figure}>
        <div className={classes.hero}></div>
      </figure>
    </div>
  );
};

export default Opening;
