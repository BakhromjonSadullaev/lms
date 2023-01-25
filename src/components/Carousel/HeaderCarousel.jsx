import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

import "./style.css";

import data from "./data";

function Slider() {
  let activeSlideId = 1;
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);
  const [activeId, setActiveId] = React.useState(1);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > people.length - 1) {
          index = 0;
        }
        return index;
      });
      setActiveId(activeSlideId);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
            activeSlideId = id;
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              {/* <img src={image} alt={name} className="person-img" /> */}
              <h4 className="name">{name}</h4>
              <p className="title">{title}</p>
              {/* <p className="text">{quote}</p> */}
            </article>
          );
        })}

        <div className="slider-bullet-points">
          {people.map((itemObj) => {
            return (
              <p
                key={itemObj.id}
                className={`bullet-point ${itemObj.id === activeId && "red"}`}
              ></p>
            );
          })}
        </div>

        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Slider;
