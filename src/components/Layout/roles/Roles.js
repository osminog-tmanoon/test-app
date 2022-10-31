import React from "react";
import GallaryCard from "../../UI/GallaryCard";
import classes from "./Roles.module.css";

const Roles = (props) => {
  const content = props.content.courses;
  const gallaryItems = Object.keys(content.gallary).map((nodeName) => {
    const data = content.gallary[nodeName];
    return (
      <GallaryCard
        courseName={nodeName}
        content={data}
        key={data.id}
        onToggleModal={props.modalToTrue}
      />
    );
  });

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
