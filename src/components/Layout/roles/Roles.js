import React, { useRef } from "react";
import Stars from "../../SVG/Stars";
import Card from "../../UI/Card";
import GallaryCard from "../../UI/GallaryCard";
import Gallary from "./Gallary";
import classes from "./Roles.module.css";

const Roles = (props) => {
  const content = props.content[2];

  const gallaryItems = content.gallary.map((item) => (
    <GallaryCard content={item} key={item.id} />
  ));

  return (
    <section className={`${classes["roles-container"]}`}>
      <h3 className={`${"sectionTitle"} ${classes["section-title"]}`}>
        {content.title}
      </h3>
      <article className={classes["gallary"]}>
        <div className={classes["overfow-flex"]}>{gallaryItems}</div>
      </article>
      <div className={classes["bg-rectangle"]}></div>
    </section>
  );
};

export default Roles;