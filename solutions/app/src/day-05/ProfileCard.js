import React from "react";
import Profile from "./Profile";
import SkillsList from "./SkillsList";

const ProfileCard = ({ user, skillsTitle }) => (
  <div className="profile-card">
    <Profile
      name={user.name}
      role={user.role}
      location={user.location}
    />
    <SkillsList
      title={skillsTitle}
      skills={user.skills}
      dateJoined={user.dateJoined}
    />
  </div>
);

export default ProfileCard;
