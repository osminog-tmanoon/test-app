import React from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const history = useHistory()

  const overlayClickHandler = () => {
    props.modalToFalse()
    history.push('/')
  }

  return (
    <div className={classes["modal-container"]}>
      <div
        className={classes["modal-overlay"]}
        onClick={overlayClickHandler}
      ></div>
      <Card className={classes.card} style={props.style}>
        {props.children}
      </Card>
    </div>
  );
};

export default Modal;
