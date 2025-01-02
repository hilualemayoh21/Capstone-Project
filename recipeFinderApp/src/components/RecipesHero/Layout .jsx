import React from "react";
import Navigation from "./Navigation";
import Footer from "../../pages/Footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
