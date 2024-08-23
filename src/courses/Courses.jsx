import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";

const Courses = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Courses;
