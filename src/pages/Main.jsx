import React from "react";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeaderSlider from "../components/HeaderSlider/HeaderSlider";
import List from "../components/List/List";
import Search from "../components/Search/Search";
import Video from "../components/Video/Video";

const Main = () => {
  return (
    <>
      <Header />
      <HeaderSlider />
      <Search />
      <Card />
      <Video />
      <List />
      <Banner />
      <Footer />
    </>
  );
};

export default Main;
