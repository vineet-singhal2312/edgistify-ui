import React from "react";
import "./WorkingFlow.css";

const WorkingFlow = () => {
  return (
    <div className="working-flow row px-md-6">
      <div className="col-9 col-md-5 p-3"></div>
      <div className="col-9 col-md-2 p-3 d-flex flex-column justify-content-center align-items-center">
        <img
          src={"/./icon_works_a1.png"}
          height={"100vh"}
          width={"100vw"}
          alt="platstore-img"
          className="header-logo"
        />
      </div>
      <div className="col-9 col-md-5 p-3 d-flex flex-column justify-content-center align-items-center">
        As soon as the customer orders groceries, the products are pushed down
        to Edgistify’s fulfillment pipeline
      </div>
      <div className="col-9 col-md-5 p-3  d-flex flex-column justify-content-center align-items-center ">
        No matter which platform the customer is ordering from. Our dashboard
        gives a panoramic view of all your orders.
      </div>
      <div className="col-9 col-md-2 p-3 d-flex flex-column justify-content-center align-items-center working-flow-images">
        <img
          src={"/./icon_works_a2.png"}
          height={"100vh"}
          width={"100vw"}
          alt="platstore-img"
          className="header-logo "
        />
        <span className="line-arrow"></span>
      </div>
      <div className="col-9 col-md-5 p-3"></div>
      <div className="col-9 col-md-5 p-3"></div>
      <div className="col-9 col-md-2 p-3 d-flex flex-column justify-content-center align-items-center working-flow-images">
        <img
          src={"/./icon_works_a3.png"}
          height={"100vh"}
          width={"100vw"}
          alt="platstore-img"
          className="header-logo "
        />
        <span className="line-arrow"></span>
      </div>
      <div className="col-9 col-md-5 p-3  d-flex flex-column justify-content-center align-items-center">
        The items are collected from our dark store nearest to your customer
      </div>
      <div className="col-9 col-md-5 p-3  d-flex flex-column justify-content-center align-items-center">
        The grocery order is dispatched & ready to be delivered within 1 hour!
      </div>
      <div className="col-9 col-md-2 p-3 d-flex flex-column justify-content-center align-items-center  working-flow-images">
        <img
          src={"/./icon_works_a4.png"}
          height={"100vh"}
          width={"100vw"}
          alt="platstore-img"
          className="header-logo "
        />
        <span className="line-arrow"></span>
      </div>
      <div className="col-9 col-md-5 p-3"></div>
    </div>
  );
};

export default WorkingFlow;
