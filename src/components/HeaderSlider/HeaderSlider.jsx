import React from "react";

import Slider from "../Carousel/HeaderCarousel";
import styles from "./styles.module.scss";

function HeaderSlider() {
  return (
    <div className={styles.parent}>
      {/* <img src={headerBg} alt="header bg" /> */}
      {/* Slider will be here late to implement */}
      <Slider />
    </div>
  );
}

export default HeaderSlider;
