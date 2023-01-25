import React from "react";
import { BsYoutube, BsFacebook, BsInstagram } from "react-icons/bs";
import footerLogo from "../../assets/images/footer-logo.png";

import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.left}>
        <img src={footerLogo} alt="footer-logo" />
        <p>
          31020 충청남도 천안시 서북구 성환읍 대학로 91번지 <br /> 개인정보
          보호책임자 : tong@nsu.ac.kr Ι TEL 041-580-2000 FAX 041-582-2117 Ι
          Email : webmaster@nsu.ac.kr COPYRIGHT (C) 2017 BY NAMSEOUL UNIVERSITY.
          ALL RIGHTS RESERVED.
        </p>
      </div>
      <div className={styles.middle}>
        <span>N-MOOC 사용문의</span>
        <span>02-2123-4201 ~ 4205</span>
        <p>
          평일 9:00 ~ 17:30 (점심시간 12:00 ~ 13:00) 토,일요일 및 공휴일은
          쉽니다.{" "}
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.media}>
          <span>
            <BsYoutube size={32}/>
          </span>
          <span>
            <BsFacebook size={32}/>
          </span>
          <span>
            <BsInstagram size={32}/>
          </span>
        </div>
        <div className={styles.boxes}>
          <span>이용약관</span>
          <span>개인정보처리방침</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
