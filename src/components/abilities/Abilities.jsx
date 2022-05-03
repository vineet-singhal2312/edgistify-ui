import React from "react";
import "./Abilities.css";
import AbilitiesCard from "./AbilitiesCard";
import { AbilitiesData } from "./AbilitiesData";
const Abilities = () => {
  return (
    <div id="features" className="Abilities container-fluid">
      <div className="row px-md-6">
        {AbilitiesData.map((contentObj) => (
          <AbilitiesCard key={contentObj.id} contentObj={contentObj} />
        ))}
      </div>
    </div>
  );
};

export default Abilities;
