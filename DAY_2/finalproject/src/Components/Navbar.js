// rfc
import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png"></img>
      </div>

      <div className="logo">
        <h1>Breaking bad</h1>
      </div>

      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/aboutus">
            <li>About us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
