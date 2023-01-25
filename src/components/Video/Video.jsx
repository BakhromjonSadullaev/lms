import React from "react";
import Button from "@mui/material/Button";

import videoImg from "../../assets/images/video-img.png";
import styles from "./styles.module.scss";

const Video = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.left}>
        <img src={videoImg} alt="video img" />
      </div>
      <div className={styles.right}>
        <p>Take your technical know-how to the next level</p>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#F9851A",
            fontFamily: "Noto Sans KR",
            fontStyle: "normal",
            fontWeight: "700",
            fontWize: "15px",
            lineHeight: "22px",
            color: "#FFFFFF",
          }}
        >
          {"NMOOC 소개"}
        </Button>
      </div>
    </div>
  );
};

export default Video;
