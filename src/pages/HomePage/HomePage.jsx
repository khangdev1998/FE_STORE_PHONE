import React from "react";
import Hero from "./Section/Hero/Hero";
import Services from "./Section/Services/Services";
import Banner from "./Section/Banner/Banner";
import ListProduct from "./Section/ListProduct/ListProduct";
import Blog from "./Section/Blog/Blog";

const HomePage = () => {
  return (
    <div className="container">
      <Hero />
      <Services />
      <ListProduct />
      <Banner />
      <Blog />
    </div>
  );
};

export default HomePage;
