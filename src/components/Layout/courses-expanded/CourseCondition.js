import React from "react";
import classes from "./CourseCondition.module.css";

const CourseCondition = (props) => {
  return (
    <div className={classes["option-card"]}>
      <header className={classes["condition-header"]}>{props.header}</header>
      <img className={classes["condition-icon"]} src={props.imgUrl} loading="lazy" alt="conditionImage"/>
      <footer className={classes["condition-info"]}>{props.info}</footer>
    </div>
  );
};

export default CourseCondition;
