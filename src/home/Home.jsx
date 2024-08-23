import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Freebooks from "../components/Freebooks";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <Freebooks />
      <Footer />
    </Fragment>
  );
};

export default Home;
