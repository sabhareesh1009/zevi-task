import React from "react";
import { InputButton } from "./InputButton";
import { SentenceText } from "./SentenceText";
import "./GridLayout.css";

function GridLayout() {
  return (
    <div className="gridLayout">
      <div className="inputButtons">
        <InputButton />
        <InputButton />
        <InputButton />
        <InputButton />
      </div>
      <div className="senetenceText">
        <SentenceText />
      </div>
    </div>
  );
}

export default GridLayout;
