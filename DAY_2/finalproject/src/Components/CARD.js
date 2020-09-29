import React from "react";
import "./card.css";

export default function CARD({ ...item }) {
  return (
    <div className="card">
      <img src={item.img}></img>
      <div className="info">
        {}
        <p>Occupation: {item.occupation}</p>
        <p>Nick Name : {item.nickname}</p>
      </div>
    </div>
  );
}
