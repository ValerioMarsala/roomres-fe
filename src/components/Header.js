import React from "react";
import "../styles/Header.css";
import AuthenticationButton from "./buttons/AuthenticationButton";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <a href="#default" className="logo">
          Room Booking Service
        </a>
      </div>

      <div className="header-nav">
        <a href="/profile">Profile</a>
        <a href="/admin-dashboard">Dashboard</a>
      </div>
      <div className="header-right">
        <AuthenticationButton />
      </div>
    </div>
  );
};

export default Header;
