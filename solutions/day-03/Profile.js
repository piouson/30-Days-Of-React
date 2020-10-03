import React from "react";
import "./Profile.css";

const skillsTitle = "Skills";
const authorName = "Piouson";
const authorRole = "Developer";
const authorLocation = "Manchester UK";
const authorDateJoined = "03 Oct 2020";
const authorSkills = [
  "HTML",
  "CSS",
  "Sass",
  "Bootstrap",
  "JavaScript",
  "jQuery",
  "TypeScript",
  "React",
  "Redux",
  "Material-UI",
  "Node",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Jest",
  "Mocha",
  "Cypress",
  "Docker",
  "Git",
];

const profile = (
  <div className="profile">
    <i className="fab fa-react" />
    <h2>
      {authorName} <i className="fas fa-check-circle"></i>
    </h2>
    <p>
      {authorRole}, {authorLocation}
    </p>
  </div>
);

const skillsItems = authorSkills.map((item) => (
  <span className="skill-item" key={item.toString()}>
    {item}
  </span>
));

const skills = (
  <div className="skills">
    <h2>{skillsTitle}</h2>
    <p>{skillsItems}</p>
    <p>
      <i className="far fa-clock"></i> Joined on {authorDateJoined}
    </p>
  </div>
);

const profileCard = (
  <div className="profile-card">
    {profile}
    {skills}
  </div>
);

const ProfileBox = <div className="box profile-box">{profileCard}</div>;

export default ProfileBox;
