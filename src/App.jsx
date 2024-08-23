import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";

const App = () => {
  return (
    <Fragment>
      <div className="dark:bg-slate-100 dark:text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Fragment>
  );
};

export default App;
