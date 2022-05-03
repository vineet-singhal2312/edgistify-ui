import React from "react";
import "./Features.css";
import FeaturesCard from "./FeaturesCard";
import { FeaturesData } from "./FeaturesData";
const Features = () => {
  return (
    <div id="features" className="features container-fluid">
      <div className="row px-md-3">
        {FeaturesData.map((contentObj) => (
          <FeaturesCard key={contentObj.id} contentObj={contentObj} />
        ))}
      </div>
    </div>
  );
};

export default Features;
