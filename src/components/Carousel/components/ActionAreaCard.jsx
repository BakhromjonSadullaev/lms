import React from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

import styles from "./ActionAreaCard.module.css";

function ActionAreaCard({
  info1,
  info2,
  info3,
  info4,
  info5,
  info6,
  info7,
  link1,
  link2,
  index,
}) {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("../../../assets", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <div>
      <Card sx={{ width: 270, height: 470, mr: 5 }} className={styles.card}>
        <div className={styles.cardOverlay}>
          <button className={`${styles.btn} ${styles.btn1}`}>{link1}</button>
          <button className={`${styles.btn} ${styles.btn2}`}>{link2}</button>
        </div>
        <>
          {" "}
          <CardMedia
            component="img"
            height="140"
            image={images[index]}
            alt="student"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="body2"
              color="text.secondary"
              sx={{ pb: 2 }}
            >
              {info1}
            </Typography>
            <Typography variant="h6" sx={{ height: 90, fontWeight: "bold" }}>
              {info2}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold", pb: 2 }}>
              {info3}
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              sx={{ pb: 2 }}
            >
              <Grid item sx={{ m: 0, p: 0 }}>
                <StarIcon sx={{ color: "#F9851A" }} />
                <StarIcon sx={{ color: "#F9851A" }} />
                <StarIcon sx={{ color: "#F9851A" }} />
                <StarIcon sx={{ color: "#F9851A" }} />
                <StarHalfIcon sx={{ color: "#f9851a" }} />
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  {info4} ({info5})
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body1" color="text.secondary" sx={{ pb: 2 }}>
              {info6}
            </Typography>{" "}
            <Typography variant="body1" color="text.secondary">
              {info7}
            </Typography>
          </CardContent>
        </>
      </Card>
    </div>
  );
}

export default ActionAreaCard;
