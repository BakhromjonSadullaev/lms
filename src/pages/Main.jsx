import React from "react";
import Banner from "../components/Banner/Banner";
import CarouselComponet from "../components/Carousel/Carousel";
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
      <CarouselComponet title="추천강의" />
      <CarouselComponet title="추천강의" />
      <CarouselComponet title="추천강의" />
      <Video />
      <CarouselComponet title="추천강의" />
      <List />
      <Banner />
      <Footer />
    </>
  );
};

export default Main;
