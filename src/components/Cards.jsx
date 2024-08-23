import React, { Fragment } from "react";

function Cards({ item }) {
  return (
    <Fragment>
      <div className="mt-4 my-3 p-3">
        <div className="dark:bg-slate-300 card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-sm md:text-lg ">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p className="text-xs md:text-base my-3">{item.title}</p>
            <div className="card-actions justify-between items-center">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Cards;
