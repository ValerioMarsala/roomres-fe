import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChooseRole = () => {
  const [role, setRole] = useState("nessun ruolo selezionato");
  const navigate = useNavigate();

  const handleClick = (role) => {
    setRole(role);
    navigate("/profile");
  };

  return (
    <div>
      {role}
      <button value="admin" onClick={() => handleClick("admin")}>
        ADMIN
      </button>
      <button value="user" onClick={() => handleClick("user")}>
        USER
      </button>
    </div>
  );
};

export default ChooseRole;
