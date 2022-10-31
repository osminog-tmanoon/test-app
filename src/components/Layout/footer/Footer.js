import React from "react";
import Card from "../../UI/Card";
import classes from "./Footer.module.css";

const Footer = (props) => {
  const content = props.content.footer;

  const openInstagramLink = (event, value) => {
    event.preventDefault();
    window.open(value);
  };

  const callNumber = (event, value) => {
    event.preventDefault();
    window.open(`tel:${value}`);
  };

  const chooseAction = {
    phone: callNumber,
    link: openInstagramLink
  };

  const contactElements = content.map((item) => (
    <div
      onClick={(event) => chooseAction[item.action](event, item.actionValue)}
      className={classes["contact-continaer"]}
      key={item.id}
    >
      <div className={classes[`${item.className}`]}></div>
      <p className={classes["links-text"]}> {item.text}</p>
    </div>
  ));

  return (
    <footer className={classes.footer}>
      <div className={classes["social-container"]}>{contactElements}</div>
      <div className={classes["stars-1"]}></div>
    </footer>
  );
};

export default Footer;
