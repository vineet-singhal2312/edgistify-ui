import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

const TeamMemberCard = ({ memberInfo }) => {
  return (
    <div className="col-6 col-md-3 py-md-3">
      <div className="team-member-card  d-flex flex-column justify-content-center align-items-center ">
        <div
          className={`team-member-card-img-div  d-flex flex-column justify-content-center align-items-center ${memberInfo.imgBgClass}`}
        >
          {" "}
          <img src={memberInfo.imgURL} className="team-member-img" alt="img" />
        </div>
        <h5 className="team-member-card-heading">{memberInfo.name}</h5>
        <p className="team-member-card-sub-heading">{memberInfo.position}</p>
        <div className="d-flex">
          <AiOutlineTwitter id="team-member-card-icon" />
          <AiOutlineGithub id="team-member-card-icon" />
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
