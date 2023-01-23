import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardActionArea } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Grid from "@mui/material/Grid";
import picture from "../../../assets/students.jpg";

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
}) {
  const [toggleLinks, setToggleLinks] = useState(false);
  return (
    <Card sx={{ width: 250, height: 380, m: 5 }}>
      <CardActionArea
        sx={{ height: "100%" }}
        onClick={() => setToggleLinks((state) => !state)}
      >
        {!toggleLinks && (
          <>
            {" "}
            <CardMedia
              component="img"
              height="140"
              image={picture}
              alt="student"
            />
            <CardContent>
              <Typography gutterBottom variant="body2" color="text.secondary">
                {info1}
              </Typography>
              <Typography variant="h6" sx={{ height: 90, fontWeight: "bold" }}>
                {info2}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {info3}
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ m: 0, p: 0 }}
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
              <Typography variant="body1" color="text.secondary">
                {info6}
              </Typography>{" "}
              <Typography variant="body1" color="text.secondary">
                {info7}
              </Typography>
            </CardContent>
          </>
        )}
        {toggleLinks && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              backgroundColor: "#0D2137",
            }}
          >
            <CardContent sx={{ lineHeight: 20 }}>
              <Box
                sx={{
                  boxShadow: 3,
                  textAlign: "center",
                  px: 4,
                  py: 1,
                  borderRadius: 2,
                  borderBottom: "5px solid #FFE483",
                  backgroundColor: "white",
                }}
              >
                <Typography gutterBottom variant="body2">
                  {link1}
                </Typography>
              </Box>
              <Box
                sx={{
                  boxShadow: 3,
                  textAlign: "center",
                  px: 4,
                  py: 1,
                  mt: 3,
                  borderRadius: 2,
                  borderBottom: "5px solid #009FAD",
                  backgroundColor: "white",
                }}
              >
                <Typography variant="body2">{link2}</Typography>
              </Box>
            </CardContent>
          </Box>
        )}
      </CardActionArea>
    </Card>
  );
}

export default ActionAreaCard;
