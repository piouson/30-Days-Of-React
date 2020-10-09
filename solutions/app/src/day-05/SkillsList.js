import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const SkillsList = ({ title, skills, dateJoined }) => (
  <div className="skills">
    <h2>{title}</h2>
    <p>
      {skills.map((skill) => (
        <span className="skill-item" key={skill.toString()}>
          {skill}
        </span>
      ))}
    </p>
    <p>
      <FontAwesomeIcon icon={faClock} /> Joined on {dateJoined}
    </p>
  </div>
);

export default SkillsList;
