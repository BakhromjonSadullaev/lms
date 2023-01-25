import React from "react";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";

const Banner = () => {
  return (
    <div className={styles.parent}>
      {/* <img src={bannerImg} alt="banner image" /> */}
      <p>
        NMOOC와 함께 개인적이고 전문적인 목표를 시작해보세요 <br /> 전체 과정의
        개인화된 추천 강의를 확인해보세요
      </p>
      <Button variant="contained" sx={{ backgroundColor: "#F9851A" }}>
        {"강의 찾기"}
      </Button>
    </div>
  );
};

export default Banner;
