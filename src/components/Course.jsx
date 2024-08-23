import React, { Fragment } from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="dark:bg max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor
            mauris vel augue hendrerit, sit amet consequat nulla pharetra. Morbi
            eget ante vel turpis luctus lacinia. Etiam porttitor mattis
            fringilla. In vehicula elementum arcu et ullamcorper. Nunc tincidunt
            nibh non orci cursus, vel tempus nisl lobortis. Nulla facilisi. Ut
            luctus justo quis turpis cursus commodo. Vivamus ac orci quis nisl
            ornare blandit non in quam.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"
          >
            Back
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Course;
