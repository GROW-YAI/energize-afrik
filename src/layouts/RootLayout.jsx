import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import BoafoWidgetInitializer from "../components/BoafoWidgetInitializer";

const RootLayout = () => {
  return (
    <div>
      <BoafoWidgetInitializer />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;