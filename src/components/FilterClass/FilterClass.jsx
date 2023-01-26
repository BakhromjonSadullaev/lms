import React from "react";
import Styles from "./FilterClass.module.scss";

const FilterClass = ({ title = "", data = [], numberOfClassess = "" }) => {
  return (
    <div className={Styles.parent}>
      <div>
        <h3 className={Styles.title}>{title}</h3>
        <p className={Styles.numberOfClassess}>{numberOfClassess}</p>
      </div>
      <div className={Styles.underline}></div>
      <ul className={Styles.list}>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <input
                className={Styles.radio}
                id={item.title}
                name={title}
                type="radio"
              />
              <label for={item.title}>{item.title}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterClass;
