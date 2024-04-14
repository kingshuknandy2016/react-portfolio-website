import React from "react";
import "./Topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import { user } from "../../data";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="leftContainer">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon">Hello</PersonIcon>
            <span>{user.mobile}</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon">Mail</EmailIcon>
            <span>{user.email}</span>
          </div>
        </div>

        <div className="rightContainer">
          <div
            className="hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
