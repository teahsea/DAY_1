import React from "react";
import "./search.css";
import { useState } from "react";
import CARD from "./CARD";

export default function SEARCH() {
  const [cId, setId] = useState("");
  const [items, setItems] = useState([]);

  //FETCH DATA USING ASYNC AWAIT
  async function fData() {
    const response = await fetch(
      `https://www.breakingbadapi.com/api/characters?name=${cId}`
    );
    const data = await response.json();
    setItems(data);
  }

  const search = e => {
    e.preventDefault();
    fData();
    setId("");
  };

  return (
    <div className="search">
      <form>
        <input
          type="text"
          value={cId}
          onChange={e => {
            setId(e.target.value);
          }}
        ></input>

        <button type="submit" onClick={search}>
          Search
        </button>

        {items ? (
          <div className="content">
            {items.map(item => (
              <CARD key={item.char_id} {...item}></CARD>
            ))}
          </div>
        ) : (
          <span></span>
        )}
      </form>
    </div>
  );
}
