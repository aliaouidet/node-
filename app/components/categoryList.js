"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CategoryList = ({ categories }) => {
  return (
    <center>
      <Carousel width="30%">
        {categories?.map((category) => (
          <div key={category?.id}>
            <img src={category?.imagecategorie} alt="image" />
            <p className="legend">{category?.nomcategorie}</p>
          </div>
        ))}
      </Carousel>
    </center>
  );
};
export default CategoryList;
