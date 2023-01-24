import React from "react";
import ListItems from "./components/ListItems";
// import ListItems from "./ListItems";

import styles from "./styles.module.scss";

let fakeArr = [
  {
    id: 1,
    title: "복수학위 운영중단공지 (뉴질랜드 오클랜드공대)",
    score: "10/1",
  },
  {
    id: 2,
    title: "남서울대학교 무선랜 사용방법 안내",
    score: "10/1",
  },
  {
    id: 3,
    title: "복수학위 운영중단공지 (뉴질랜드 오클랜드공대)",
    score: "9/27",
  },
  {
    id: 4,
    title: "스마트출결시스템 관련 어플 설치 방법 및 사용 요약 안내",
    score: "9/15",
  },
];

const List = () => {
  return (
    <div className={styles.parent}>
      <ListItems data={fakeArr} />
      <ListItems data={fakeArr} />
    </div>
  );
};

export default List;
