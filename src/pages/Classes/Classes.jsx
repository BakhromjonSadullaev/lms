import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./styles.module.scss";
import ClassCardContainer from "../../components/ClassCardContainer/ClassCardContainer";

const Classes = () => {
  return (
    <>
      <Header />
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
