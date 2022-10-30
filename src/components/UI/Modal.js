import React from "react";
import Card from "./Card";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={classes["modal-container"]}>
      <div
        className={classes["modal-overlay"]}
        onClick={props.onToggleModal}
      ></div>
      <Card className={classes.card} style={props.style}>
        {props.children}
      </Card>
    </div>
  );
};

export default Modal;
