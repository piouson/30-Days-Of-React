import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faUserTie } from "@fortawesome/free-solid-svg-icons";

const Profile = ({ name, role, location }) => (
  <div className="profile">
    <FontAwesomeIcon icon={faUserTie} />
    <h2>
      {name} <FontAwesomeIcon icon={faCheckCircle} />
    </h2>
    <p>
      {role}, {location}
    </p>
  </div>
);

export default Profile;
