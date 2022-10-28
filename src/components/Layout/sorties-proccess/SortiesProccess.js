import React from "react";
import Card from "../../UI/Card";
import classes from "./SortiesProccess.module.css";

const SortiesProccess = (props) => {
  const content = props.content[1];

  const levelsElement = content.levels.map((item) => (
    <Card key={item.id} style={{ padding: "1rem" }}>
      <h4 className="cartTitle">{item.title}</h4>
      <p className="text">{item.text}</p>
    </Card>
  ));
  return (
    <section className={classes["section-container"]}>
      <h3 className="sectionTitle">{content.title}</h3>
      {levelsElement}
      <div className={classes["stars-1"]}></div>
    </section>
  );
};

export default SortiesProccess;
