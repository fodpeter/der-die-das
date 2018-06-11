import React from "react";
import "./ShowWord.css";

const ShowWord = ({ word, onSelect }) => (
  <div className="ShowWord">
    <div className="Word">{word}</div>
    <div className="Buttons">
      <button onClick={() => onSelect("der")}>der</button>
      <button onClick={() => onSelect("die")}>die</button>
      <button onClick={() => onSelect("das")}>das</button>
    </div>
  </div>
);

export default ShowWord;
