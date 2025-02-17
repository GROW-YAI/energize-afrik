import React from "react";
import Hero from "./sections/Hero";
import AboutProduct from "./sections/AboutProduct";
import AboutInnovator from "./sections/AboutInnovator";
import Contact from "./sections/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutProduct />
      <AboutInnovator />
      <Contact />
    </div>
  );
};

export default Home;
