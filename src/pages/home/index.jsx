import React from "react";
import Hero from "./sections/Hero";
import AboutProduct from "./sections/AboutProduct";
import AboutInnovator from "./sections/AboutInnovator";
import Contact from "./sections/Contact";
import Features from "./sections/Features";
import Hero2 from "./sections/Hero2";

const Home = () => {
  return (
    <div>
      <div id="hero" className="mt-8">
        <Hero />
        {/* <Hero2 /> */}
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="about-product">
        <AboutProduct />
      </div>
      <div id="about-innovator">
        <AboutInnovator />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
