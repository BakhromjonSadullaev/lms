import React from "react";
import { BsArrowRight } from "react-icons/bs";

import styles from "../styles.module.scss";

const ListItems = ({ data: arr }) => {
  return (
    <div className={styles.child}>
      <div className={styles.header}>
        <h2 className={styles.title}>{"공지사항"}</h2>{" "}
        <span className={styles.link}>
          더보기 <BsArrowRight size={16} />
        </span>
      </div>
      <hr />
      <div>
        {arr.map((itemObj) => {
          let { id, title, score } = itemObj;
          return (
            <div className={styles.item} key={id}>
              <div className={styles.box}>
                <div className={styles.circle}></div>
                <span className={styles.title}>{title}</span>
              </div>
              <span className={styles.score}>{score}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListItems;
