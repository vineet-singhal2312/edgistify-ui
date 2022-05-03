import React from "react";

const AbilitiesCard = ({ contentObj }) => {
  return (
    <div className="col-9 col-md-4 p-3">
      <div className="Abilities-card  d-flex flex-column justify-content-around align-items-center ">
        <div className="Abilities-card-icon  d-flex flex-column justify-content-center align-items-center">
          {" "}
          {contentObj.icon}
        </div>
        <div className="Abilities-card-heading">{contentObj.title}</div>
        <p className="Abilities-card-sub-heading">{contentObj.subTitle}</p>
      </div>
    </div>
  );
};

export default AbilitiesCard;
