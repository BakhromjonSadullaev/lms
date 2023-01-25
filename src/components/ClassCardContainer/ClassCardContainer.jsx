import React from "react";
import ActionAreaCard from "../Carousel/components/ActionAreaCard";
import data from "../Carousel";
import styles from "./styles.module.scss";

const ClassCardContainer = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.sidebar}>sidebar</div>
      <div className={styles.listOfClasses}>
        {data.map((d, i) => (
          <ActionAreaCard key={i} {...d} index={i} />
        ))}
      </div>
    </div>
  );
};

export default ClassCardContainer;
