import React from "react";
import "./show.css";
import { useState } from "react";
import CARD from "./CARD";

export default function SHOW() {
  // STATE IN HOOKS
  const [items, setItems] = useState([]);
  const [click, setClick] = useState(false);

  //FETCH DATA USING ASYNC AWAIT
  async function fData() {
    const response = await fetch(
      "https://www.breakingbadapi.com/api/characters"
    );
    const data = await response.json();
    setItems(data);
  }

  return (
    <div className="show">
      <button
        onClick={() => {
          fData();
          setClick(!click);
        }}
      >
        SHOW
      </button>

      {click ? (
        <div className="content">
          {items.map(item => (
            <CARD key={item.char_id} {...item}></CARD>
          ))}
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
}
