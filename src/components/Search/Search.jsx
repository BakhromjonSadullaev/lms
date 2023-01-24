import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BsSearch } from "react-icons/bs";

import styles from "./styles.module.scss";

const Search = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.child}>
        <div className={styles.input}>
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
        <Button
          variant="contained"
          sx={{ backgroundColor: "#F9851A", width: "140px", height: "55px" }}
        >
          <BsSearch size={24} />
        </Button>
        <Button
          variant="outlined"
          sx={{ backgroundColor: "#F9851A", width: "140px", height: "55px" }}
        >
          {"상세검색"}
        </Button>
      </div>
    </div>
  );
};

export default Search;
