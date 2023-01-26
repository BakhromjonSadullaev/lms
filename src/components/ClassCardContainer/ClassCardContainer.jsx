import React from "react";
import { GrRefresh } from "react-icons/gr";

import ActionAreaCard from "../Carousel/components/ActionAreaCard";
import data from "../Carousel";

import FilterClass from "../FilterClass/FilterClass";
import { total, major, language } from "../FilterClass";

import styles from "./styles.module.scss";

const ClassCardContainer = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.sidebar}>
        <div className={styles.findClass}>
          <div className={styles.className}>강의찾기</div>
          <div className={styles.refreshBtn}>
            <GrRefresh color="rgba(0, 0, 0, 0.3)" />
          </div>
        </div>
        <FilterClass title="total" data={total} numberOfClassess="128" />
        <FilterClass title="major" data={major} numberOfClassess="93" />
        <FilterClass title="language" data={language} numberOfClassess="" />
      </div>

      <div className={styles.listOfClasses}>
        {data.map((d, i) => (
          <ActionAreaCard key={i} {...d} index={i} />
        ))}
      </div>
    </div>
  );
};

export default ClassCardContainer;
