import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./styles.module.scss";
import ClassCardContainer from "../../components/ClassCardContainer/ClassCardContainer";

const Classes = () => {
  return (
    <>
      <Header />
      <div className={styles.inputBox}>
        <div className={styles.child}>
          <TextField
            id="outlined-search fullWidth"
            fullWidth
            label="검색어를 입력하세요"
            type="search"
            sx={{
              background: "#FFFFFF",
              boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.25)",
              borderRadius: "12px",
              border: "none",
            }}
          />
        </div>
      </div>
      <ClassCardContainer />
      <div className={styles.container}>
        <Stack spacing={2}>
          <Pagination count={10} color="primary" />
        </Stack>
      </div>
      <Footer />
    </>
  );
};

export default Classes;
