import React from "react";
import "./Header.css";
import PrimaryButton from "../button/PrimaryButton";
const Header = () => {
  return (
    <div className="header container-fluid px-md-4" id="header">
      <div className="row px-md-4 d-md-flex justify-content-around align-items-center">
        <h2 className="col-3 col-md-3 header-title fw-bolder d-flex justify-content-start align-items-center mb-0 ">
          <img
            src={"/./edgistify-logo.png"}
            height={"60vh"}
            width={"200vw"}
            alt="platstore-img"
            className="header-logo"
          />
        </h2>
        <div className="col-6 d-none d-md-flex justify-content-around align-items-center">
          <a href="/#home" className="header-list-item">
            Home
          </a>
          <a href="/#service" className="header-list-item">
            Solution
          </a>
          <a href="/#network" className="header-list-item">
            Why us
          </a>

          <PrimaryButton text={"Schedule Call"} />
          <PrimaryButton text={"Partner With Us"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
