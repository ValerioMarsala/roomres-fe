import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/Profile.css";

const Profile = () => {
  const { user } = useAuth0();

  const { name, picture, email } = user;

  return (
    <div className="page-container">
      <div className="profile-wrapper">
        <img src={picture} alt={name} />
        <div className="user-info">
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Profile;
