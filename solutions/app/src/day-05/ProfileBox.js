import React from "react";
import ProfileCard from "./ProfileCard";
import "../css/Profile.css";

function ProfileBox({ user }) {
  return (
    <div className="box profile-box">
      <ProfileCard user={user} skillsTitle="Skills" />
    </div>
  );
}

export default ProfileBox;
