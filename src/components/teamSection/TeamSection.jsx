import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import { TeamMemberList } from "./TeamMemberList";
import "./TeamSection.css";
const TeamSection = () => {
  return (
    <div className="team-section container-fluid d-flex flex-column justify-content-center align-items-center my-5 py-5">
      <div className="team-section-top row py-4  d-flex justify-content-between align-items-center "></div>
      <div className="row team-section-bottom card-container px-md-4">
        {TeamMemberList.map((memberInfo) => (
          <TeamMemberCard key={memberInfo.id} memberInfo={memberInfo} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
