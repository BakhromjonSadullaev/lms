import React, { useState } from "react";
import { BsBellFill, BsGlobe2 } from "react-icons/bs";

import profile from "../../assets/images/profile.png";
import logo from "../../assets/images/NSU-LOGO.png";
import nameLogo from "../../assets/images/N-MOOC.png";

import styles from "./Header.module.scss";

let fakeArr = [
  {
    id: 1,
    title: "N-MOOC소개",
    isHover: false,
    items: ["N-MOOC 소개", "NSU 학사일정"],
  },
  { id: 2, title: "강의" },
  {
    id: 3,
    title: "커뮤니티",
    isHover: false,
    items: ["공지사항", "자료실", "FAQ"],
  },
];

const Header = () => {
  const [arr, setArr] = useState(fakeArr);

  const selectLink = (id) => {
    let result = arr.map((item) => {
      if (item.id === id && id !== 2) {
        return { ...item, isHover: true };
      } else {
        return { ...item, isHover: false };
      }
    });
    setArr(result);
  };

  const leaveMouse = (arr) => {
    let result = arr.map((item) => {
      return { ...item, isHover: false };
    });
    setArr(result);
  };

  return (
    <div className={styles.parent}>
      <div className={styles.left}>
        <img src={logo} alt="logo" />
        <img src={nameLogo} alt="name logo" />
      </div>
      <div className={styles.middle}>
        {arr.map((itemObj) => {
          let { title, id, isHover, items = [] } = itemObj;
          return (
            <div
              key={id}
              onMouseOver={() => selectLink(id)}
              onMouseLeave={() => leaveMouse(arr)}
            >
              {title}
              <span className={` ${isHover ? styles.hovered : styles.hidden}`}>
                {items?.map((linkName, idx) => {
                  return (
                    <div className={styles.item} key={idx}>
                      <div className={styles.circle}></div>
                      <div>{linkName}</div>
                    </div>
                  );
                })}
              </span>
            </div>
          );
        })}
      </div>
      <div className={styles.right}>
        <BsBellFill />
        <BsGlobe2 />
        <button>로그아웃</button>
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
