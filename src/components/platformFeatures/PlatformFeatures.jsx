import React from "react";
import "./Features.css";
import FeaturesCard from "./FeaturesCard";
import { FeaturesData } from "./FeaturesData";
const PlatformFeatures = () => {
  return (
    <div class="container overflow-hidden">
      <div id="features" className="platform-features container-fluid mb-5 ">
        <div className="row">
          {FeaturesData.map((contentObj) => (
            <FeaturesCard key={contentObj.id} contentObj={contentObj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformFeatures;
