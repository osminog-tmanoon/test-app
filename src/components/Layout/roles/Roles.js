import React, { useRef } from "react";
import GallaryCard from "../../UI/GallaryCard";
import classes from "./Roles.module.css";

const Roles = (props) => {
  const content = props.content;
  const gallaryRef = useRef();

  const handleNextScroll = () => {
    console.log(gallaryRef.current.scrollLeft);
    gallaryRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const handleBackScroll = () => {
    console.log(gallaryRef.current.scrollLeft);
    gallaryRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  const gallaryItems = Object.keys(content.gallary).map((nodeName) => {
    const data = content.gallary[nodeName];
    return (
      <GallaryCard
        courseName={data.urlKey}
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
      <div className={classes["next-card"]} onClick={handleNextScroll}></div>
      <div className={classes["back-card"]} onClick={handleBackScroll}></div>
      <article className={classes["gallary"]} ref={gallaryRef}>
        <div className={classes["overfow-flex"]}>{gallaryItems}</div>
      </article>
      <div
        className={
          (props.index + 1) % 2 === 0
            ? classes["stars-1"]
            : classes["stars-1-right"]
        }
      ></div>
      <div
        className={
          props.index % 2 === 0
            ? classes["bg-rectangle"]
            : classes["bg-rectangle-right"]
        }
      ></div>
    </section>
  );
};

export default Roles;
