// rfc
import React from "react";
import "./navbar.css";

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
          <li>Home</li>
          <li>About us</li>
        </ul>
      </div>
    </div>
  );
}
