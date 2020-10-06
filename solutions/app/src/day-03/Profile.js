import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import "./Profile.css";
import { faReact } from "@fortawesome/free-brands-svg-icons";

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
    <FontAwesomeIcon icon={faReact} />
    <h2>
      {authorName} <FontAwesomeIcon icon={faCheckCircle} />
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
      <FontAwesomeIcon icon={faClock} /> Joined on {authorDateJoined}
    </p>
  </div>
);

const profileCard = (
  <div className="profile-card">
    {profile}
    {skills}
  </div>
);

function ProfileBox() {
  return (
    <div className="box profile-box">{profileCard}</div>
  );
}

export default ProfileBox;
