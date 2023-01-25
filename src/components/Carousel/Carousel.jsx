import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import ActionAreaCard from "./components/ActionAreaCard";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

function CarouselComponet({ title }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const data = [
    {
      info1: "VR/MR Project Planning",
      info2: "가상,증강현실 프로젝트기획",
      info3: "송은지교수",
      info4: 4.9,
      info5: 2932,
      info6: "전공선택 / 3학점",
      info7: "수강신청 : 10/1 ~ 10/19",
      link1: "강의 상세보기",
      link2: "수강신청",
    },
    {
      info1: "3D Interaction Design",
      info2: "3D 인터랙티브",
      info3: "박동휘교수",
      info4: 4.3,
      info5: 1537,
      info6: "전공선택 / 3학점",
      info7: "수강신청 : 10/1 ~ 10/19",
      link1: "강의 상세보기",
      link2: "수강신청",
    },
    {
      info1: "3D Modeling",
      info2: "3D Modelling",
      info3: "송은지교수",
      info4: 4.9,
      info5: 2932,
      info6: "전공선택 / 3학점",
      info7: "수강신청 : 10/1 ~ 10/19",
      link1: "강의 상세보기",
      link2: "수강신청",
    },
    {
      info1: "Smart UX Design",
      info2: "스마트팜 UX 디자인",
      info3: "김명찬교수",
      info4: 4.5,
      info5: 1555,
      info6: "전공선택 / 3학점",
      info7: "수강신청 : 10/1 ~ 10/19",
      link1: "강의 상세보기",
      link2: "수강신청",
    },
    {
      info1: "VR/MR Project Planning",
      info2: "가상,증강현실 프로젝트기획",
      info3: "송은지교수",
      info4: 4.9,
      info5: 2932,
      info6: "전공선택 / 3학점",
      info7: "수강신청 : 10/1 ~ 10/19",
      link1: "강의 상세보기",
      link2: "수강신청",
    },
    {
      info1: "3D Interaction Design",
      info2: "3D 인터랙티브",
      info3: "박동휘교수",
      info4: 4.3,
      info5: 1537,
      info6: "전공선택 / 3학점",
      info7: "수강신청 : 10/1 ~ 10/19",
      link1: "강의 상세보기",
      link2: "수강신청",
    },
    {
      info1: "3D Modeling",
      info2: "3D Modelling",
      info3: "송은지교수",
      info4: 4.9,
      info5: 2932,
      info6: "전공선택 / 3학점",
      info7: "수강신청 : 10/1 ~ 10/19",
      link1: "강의 상세보기",
      link2: "수강신청",
    },
    {
      info1: "Smart UX Design",
      info2: "스마트팜 UX 디자인",
      info3: "김명찬교수",
      info4: 4.5,
      info5: 1555,
      info6: "전공선택 / 3학점",
      info7: "수강신청 : 10/1 ~ 10/19",
      link1: "강의 상세보기",
      link2: "수강신청",
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ margin: "45px auto" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item>
          <h1 style={{ fontSize: "32px", marginBottom: "2rem" }}>{title}</h1>
        </Grid>
        <Grid item>
          <Carousel
            infinite={false}
            containerProps={{
              style: {
                justifyContent: "space-between",
                userSelect: "text",
              },
            }}
            activeSlideIndex={activeSlide}
            activeSlideProps={{
              style: {
                background: "blue",
              },
            }}
            onRequestChange={setActiveSlide}
            forwardBtnProps={{
              children: ">",
              style: {
                width: 60,
                height: 60,
                minWidth: 60,
                fontSize: "20px",
                alignSelf: "center",
                borderRadius: "100%",
                backgroundColor: "#E0EAF5",
                color: "#00407A",
                border: "none",
                cursor: "pointer",
              },
            }}
            backwardBtnProps={{
              children: "<",
              style: {
                width: 60,
                height: 60,
                minWidth: 60,
                fontSize: "20px",
                alignSelf: "center",
                borderRadius: "100%",
                backgroundColor: "#E0EAF5",
                color: "#00407A",
                border: "none",
                cursor: "pointer",
              },
            }}
            dotsNav={{
              show: true,
              itemBtnProps: {
                style: {
                  height: 10,
                  width: 10,
                  borderRadius: "100%",
                  border: 0,
                  marginRight: 10,
                  marginTop: 10,
                  backgroundColor: "#005A8D",
                },
              },
              activeItemBtnProps: {
                style: {
                  height: 10,
                  width: 10,
                  borderRadius: "100%",
                  border: 0,
                  background: "black",
                  marginRight: 10,
                  marginTop: 10,
                  backgroundColor: "#0D2137",
                },
              },
            }}
            itemsToShow={4}
            speed={400}
          >
            {data.map((d, i) => (
              <ActionAreaCard key={i} {...d} index={i} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CarouselComponet;
